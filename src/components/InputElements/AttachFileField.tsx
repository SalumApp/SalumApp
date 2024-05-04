import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import BottomSheetAttach from "../Sheet/BottomSheetAttach";

interface AttachFileFieldProp {
  customPlaceholder: string;
  onAttachChange: (data: string) => void;
}

const AttachFileField = ({
  customPlaceholder = "Input...",
  onAttachChange,
}: AttachFileFieldProp) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [image, setImage] = useState(null);

  const handleToggle = () => {
    setIsBottomSheetVisible(true);
  };

  const pickImageCam = async () => {
    setIsBottomSheetVisible(false);
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
    } else {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        exif: false,
        base64: true,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        onAttachChange(
          `data:${result.assets[0].mimeType};base64,${result.assets[0].base64}`,
        );
      }
    }
  };

  const pickImageGallery = async () => {
    setIsBottomSheetVisible(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      exif: false,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onAttachChange(
        `data:${result.assets[0].mimeType};base64,${result.assets[0].base64}`,
      );
    }
  };

  const pickDoc = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const response = await fetch(result.assets[0].uri);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        onAttachChange(`data:application/pdf;base64,${base64data}`);
      };
      reader.readAsDataURL(blob);
    }
  };

  const onPressDoc = () => {
    setIsBottomSheetVisible(false);
    const timeout = Platform.OS === "ios" ? 1000 : 10;
    setTimeout(() => pickDoc(), timeout);
  };

  return (
    <View className="relative px-4">
      <TouchableOpacity
        activeOpacity={0.7}
        className="ml-2 mr-2 mt-4"
        onPress={handleToggle}
      >
        {image ? (
          <View className="flex-row items-center justify-center px-4 border border-gray-300 bg-white rounded-3xl h-20">
            <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />
          </View>
        ) : (
          <View className="flex-row items-center justify-center px-4 border-dashed border border-gray-300 bg-white dark:bg-s_dark-75 rounded-3xl h-20">
            <IconGlyph glyph="Attachment" dim={40} fill="#91919F" />
            <Text className="text-2xl" style={{ color: "#9CA3AF" }}>
              {customPlaceholder}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <BottomSheetAttach
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        onPressCam={pickImageCam}
        onPressGallery={pickImageGallery}
        onPressDoc={onPressDoc}
      />
    </View>
  );
};

export default AttachFileField;
