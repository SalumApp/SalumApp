import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  GDrive,
  MimeTypes,
} from "@robinbobin/react-native-google-drive-api-wrapper";
import HttpError from "@robinbobin/react-native-google-drive-api-wrapper/HttpError";
import ResumableUploader from "@robinbobin/react-native-google-drive-api-wrapper/api/aux/uploaders/ResumableUploader";
import * as Crypto from "expo-crypto";
import * as FileSystem from "expo-file-system";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import { TopNav } from "../components/Navigation/TopNav";
import BottomSheetConfirmation from "../components/Sheet/BottomSheetConfirmation";
import { schemas } from "../models";
import { addAlpha, bytesToBase64, base64ToBytes } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive"],
});

export const CloudOptionsScreen = () => {
  const gdrive = new GDrive();
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isOperationSuccessful, setIsOperationSuccessful] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showSignout, setShowSignout] = useState(false);
  const [realmBackupKey, setRealmBackupKey] = useState(null);

  gdrive.fetchTimeout = 10000;

  const getBackupKey = async () => {
    let realmBackupKey = await SecureStore.getItemAsync("salum.backupKey");
    if (!realmBackupKey) {
      const randomKey = await Crypto.getRandomBytesAsync(64);
      realmBackupKey = bytesToBase64(randomKey);
      await SecureStore.setItemAsync("salum.backupKey", realmBackupKey);
    }
    setRealmBackupKey(realmBackupKey);
    return realmBackupKey;
  };

  useEffect(() => {
    getBackupKey();
  }, []);

  const dismissModal = () => {
    setShowConfirmation(false);
    setIsOperationSuccessful(false);
  };

  const showResultModal = (message: string) => {
    setModalMessage(message);
    setShowConfirmation(true);
  };

  const signOutFromGoogle = async () => {
    await SecureStore.deleteItemAsync("salum.googleDisplayName");
    await SecureStore.deleteItemAsync("salum.googleAccessToken");
    await SecureStore.deleteItemAsync("salum.googleIdToken");
    navigation.goBack();
  };

  const onPressConnect = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await SecureStore.setItemAsync(
        "salum.googleDisplayName",
        userInfo.user.name,
      );
      console.log("Signed in as ", userInfo.user.name);
      setDisplayName(userInfo.user.name);
      await SecureStore.setItemAsync(
        "salum.googleAccessToken",
        (await GoogleSignin.getTokens()).accessToken,
      );
      await SecureStore.setItemAsync(
        "salum.googleIdToken",
        (await GoogleSignin.getTokens()).idToken,
      );
      console.log("Tokens Stored");
      return true;
    } catch (error) {
      // @ts-ignore
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log("SIGN_IN_CANCELLED");
          break;
        case statusCodes.IN_PROGRESS:
          console.log("IN_PROGRESS");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log("PLAY_SERVICES_NOT_AVAILABLE");
          break;
        default:
          console.log(error);
      }
    }
    return false;
  };

  const onPressUpload = async () => {
    if (showSpinner) {
      return;
    }

    gdrive.accessToken = await SecureStore.getItemAsync(
      "salum.googleAccessToken",
    );

    if (gdrive.accessToken === null) {
      if (await onPressConnect()) {
        gdrive.accessToken = await SecureStore.getItemAsync(
          "salum.googleAccessToken",
        );
      } else {
        return;
      }
    }

    setShowSpinner(true);

    const realmBackupKey = await getBackupKey();

    // const filename = "SalumBackup" + Date.now().toString() + ".realm";
    const filename = "SalumBackup.realm";

    const fileUri = FileSystem.documentDirectory + filename;
    console.log(fileUri);

    setUploadStep("Creating Backup");

    const result = await SecureStore.getItemAsync("salum.databaseKey");
    const localRealm = await Realm.open({
      schema: schemas,
      encryptionKey: base64ToBytes(result),
    });

    localRealm.writeCopyTo({
      schema: schemas,
      path: filename,
      encryptionKey: base64ToBytes(realmBackupKey),
    });

    const fileInfo = await FileSystem.getInfoAsync(fileUri);

    console.log("Backup File Info", fileInfo);

    if (!fileInfo.exists) {
      console.error("Backup creation failed");
      setIsOperationSuccessful(false);
      showResultModal("Database Copy Failed");
      return;
    }

    console.log("File Size", fileInfo.size);
    setUploadStep("Uploading Backup");

    try {
      const data = await FileSystem.readAsStringAsync(fileUri, {
        encoding: "base64",
      });
      const decoded = base64ToBytes(data);
      console.log("Data length", decoded.length);

      // noinspection JSVoidFunctionReturnValueUsed
      const uploader = gdrive.files
        .newResumableUploader()
        .setShouldUseMultipleRequests(true)
        .setIsBase64(true)
        .setData(decoded, MimeTypes.BINARY)
        .setRequestBody({
          name: filename,
        }) as ResumableUploader;

      console.log(await uploader.execute());
      console.log("Upload status", await uploader.requestUploadStatus());
      await FileSystem.deleteAsync(fileUri);
      setIsOperationSuccessful(true);
      showResultModal("Backup Completed");
    } catch (error) {
      if (
        error instanceof HttpError &&
        (error as HttpError).json.error.code === 401
      ) {
        showResultModal("Please sign-in and try again");
        onPressConnect();
      } else {
        showResultModal(error.toString());
      }
      await FileSystem.deleteAsync(fileUri);
      setIsOperationSuccessful(false);
    }
    setShowSpinner(false);
  };

  const [displayName, setDisplayName] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [uploadStep, setUploadStep] = useState(null);

  React.useEffect(() => {
    const getDisplayName = async () => {
      setDisplayName(await SecureStore.getItemAsync("salum.googleDisplayName"));
    };
    getDisplayName();
  }, []);

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Backup & Sync"
        titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        onLeftPress={() => navigation.goBack()}
        right={
          <TouchableOpacity
            className="mr-4 p-1 rounded-xl border border-s_light-40"
            onPress={() => setShowSignout(true)}
          >
            <IconGlyph
              glyph="More"
              dim={32}
              fill={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
            />
          </TouchableOpacity>
        }
      />
      <View className="flex-1 justify-center items-center mx-6">
        <TouchableOpacity
          className="h-36 m-4 rounded-3xl bg-s_light-100 dark:bg-s_dark_navy-75 w-full flex-row items-center"
          onPress={onPressConnect}
        >
          <View
            className="rounded-3xl w-20 h-20 flex justify-center items-center mx-4"
            style={{ backgroundColor: addAlpha("rgb(0, 119, 255)", 0.35) }}
          >
            <IconGlyph glyph="Cloud" dim={52} fill="rgb(0, 119, 255)" />
          </View>
          <View className="mr-4">
            {displayName && (
              <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100">
                Signed in as {displayName}
              </Text>
            )}
            {!displayName && (
              <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100">
                Sign in to Google
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="h-36 m-4 rounded-3xl bg-s_light-100 dark:bg-s_dark_navy-75 w-full flex-row items-center"
          onPress={onPressUpload}
        >
          <View
            className="rounded-3xl w-20 h-20 flex justify-center items-center mx-4"
            style={{ backgroundColor: addAlpha("rgb(0, 119, 255)", 0.35) }}
          >
            <IconGlyph glyph="Upload" dim={52} fill="rgb(0, 119, 255)" />
          </View>
          {showSpinner && (
            <View className="flex-1 flex-row justify-center">
              <ActivityIndicator size="large" />
              <Text className="mx-3 text-3xl font-medium text-s_dark-100 dark:text-s_light-100">
                {uploadStep}
              </Text>
            </View>
          )}
          {!showSpinner && (
            <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100">
              Sync to Cloud
            </Text>
          )}
        </TouchableOpacity>
        {/*<TouchableOpacity*/}
        {/*  className="h-36 m-4 rounded-3xl bg-s_light-100 dark:bg-s_dark_navy-75 w-full flex-row items-center"*/}
        {/*  onPress={onPressDownload}*/}
        {/*>*/}
        {/*  <View*/}
        {/*    className="rounded-3xl w-20 h-20 flex justify-center items-center mx-4"*/}
        {/*    style={{ backgroundColor: addAlpha("rgb(0, 119, 255)", 0.35) }}*/}
        {/*  >*/}
        {/*    <IconGlyph glyph="Download" dim={52} fill="rgb(0, 119, 255)" />*/}
        {/*  </View>*/}
        {/*  <View className="mr-4">*/}
        {/*    <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100">*/}
        {/*      Sync from Cloud*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*</TouchableOpacity>*/}
      </View>
      <BottomSheetConfirmation
        visible={showSignout}
        onClose={() => setShowSignout(false)}
        title="Manage Backup"
        description={`Backup Key: ${realmBackupKey}`}
        leftButtonText="Close"
        rightButtonText="Sign Out"
        onPressLeft={() => setShowSignout(false)}
        onPressRight={() => signOutFromGoogle()}
      />
      {showConfirmation && (
        <Modal visible={showConfirmation} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={dismissModal}>
            <View className="flex-1 bg-s_dark-100op justify-center items-center">
              <View className="flex-col bg-s_light-100 dark:bg-s_dark_navy-100 p-5 rounded-3xl items-center">
                {isOperationSuccessful && (
                  <IconGlyph
                    glyph="Success"
                    dim={52}
                    fill={ThemeColor.s_green["100"]}
                  />
                )}
                {!isOperationSuccessful && (
                  <IconGlyph
                    glyph="Warning"
                    dim={52}
                    fill={ThemeColor.s_red["100"]}
                  />
                )}
                <Text className="text-lg text-s_dark-100 dark:text-s_light-100 font-medium">
                  {modalMessage}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </SafeAreaInsetsView>
  );
};
