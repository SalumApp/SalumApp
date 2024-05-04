// @ts-nocheck
import "react-native-get-random-values";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useObject, useRealm } from "@realm/react";
import * as React from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { UpdateMode } from "realm";

import { IconGlyph } from "../assets/Glyph";
import { MyButton } from "../components/Button/Button";
import { TopNav } from "../components/Navigation/TopNav";
import BottomSheetConfirmation from "../components/Sheet/BottomSheetConfirmation";
import ColorPickerBottomSheet from "../components/Sheet/ColorPickerBottomSheet";
import { Currency } from "../models/Currency";
import { Friend } from "../models/Friend";
import { Transaction } from "../models/Transaction";
import { mainCurrency } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const DetailedFriend = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const realm = useRealm();
  const { friendId } = route.params;
  const friend = useObject(Friend, friendId);
  const defaultCurrency = useObject(Currency, mainCurrency);

  let dispMessage = "";
  const netBal = friend ? friend.calculateNetBalance() : 0;
  const textColorBalance = netBal < 0 ? "s_red-100" : "s_green-100";
  if (netBal < 0) {
    dispMessage = `You owe ${friend.name}`;
  } else if (netBal > 0) {
    dispMessage = `${friend.name} owes you`;
  } else {
    dispMessage = `No money owed`;
  }

  const [selectedColor, setSelectedColor] = React.useState(
    friend ? friend.color : "rgb(0, 119, 255)",
  );
  const [friendName, setFriendName] = React.useState(friend ? friend.name : "");
  const [isColorPickerVisible, setIsColorPickerVisible] = React.useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    React.useState(false);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setIsColorPickerVisible(false);
  };

  const saveChanges = () => {
    realm.write(() => {
      realm.create(
        Friend,
        {
          _id: friendId,
          name: friendName,
          color: selectedColor,
          netBalance: 0,
        },
        UpdateMode.Modified,
      );
    });
    navigation.navigate("split");
  };

  const handleFriendDelete = () => {
    friend
      .linkingObjects<Transaction>("Transaction", "friends")
      .forEach((trans) => {
        if (trans.friends.length === 1) {
          realm.write(() => {
            trans.isSplit = false;
          });
        }
      });

    realm.write(() => {
      realm.delete(friend);
      setIsDeleteConfirmationVisible(false);
      navigation.navigate("split");
    });
  };

  return (
    <SafeAreaInsetsView
      topInsetColor={selectedColor}
      className="flex-1 bg-s_light-80 dark:bg-s_dark-100"
    >
      <TopNav
        title="Friend Detail"
        titleColor="#FFFFFF"
        bgColor={selectedColor}
        onLeftPress={() => navigation.navigate("split")}
        right={
          friend ? (
            <TouchableOpacity
              onPress={() => setIsDeleteConfirmationVisible(true)}
              className="pr-5"
            >
              <IconGlyph glyph="Trash" dim={32} fill="#FFFFFF" />
            </TouchableOpacity>
          ) : (
            <View className="w-14" />
          )
        }
      />
      <View
        className="p-4 items-center justify-center rounded-b-3xl"
        style={{ backgroundColor: selectedColor }}
      >
        <TextInput
          className="text-4xl font-medium text-s_light-100 text-center"
          value={friendName}
          onChangeText={setFriendName}
          placeholder="Enter friend's name"
          placeholderTextColor="#FFFFFF"
          selectionColor="#FFFFFF"
        />
      </View>
      <ScrollView className="">
        <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mt-5 mb-6 self-center">
          {dispMessage}
        </Text>
        {friend && (
          <Text
            className={`text-6xl font-medium text-${textColorBalance} text-center`}
          >
            {defaultCurrency.getAmountString(
              friend ? friend.calculateNetBalance() : 0,
            )}
          </Text>
        )}
        <View className="mx-4 mt-8 items-center">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Friend Icon Color
          </Text>
        </View>

        <TouchableOpacity
          className="h-24 w-24 rounded-full self-center border-s_light-40 border-2 mt-3"
          style={{ backgroundColor: selectedColor }}
          onPress={() => setIsColorPickerVisible(true)}
        />

        {/* Add other modifiable fields */}
      </ScrollView>
      <View className="h-20 mx-4 mb-8">
        <MyButton onPress={saveChanges} text="Save Changes" />
      </View>
      <ColorPickerBottomSheet
        visible={isColorPickerVisible}
        onClose={() => setIsColorPickerVisible(false)}
        onColorSelect={handleColorSelect}
      />
      <BottomSheetConfirmation
        visible={isDeleteConfirmationVisible}
        onClose={() => setIsDeleteConfirmationVisible(false)}
        title="Remove this friend?"
        description="Are you sure do you want to remove this friend from your list?"
        onPressLeft={() => setIsDeleteConfirmationVisible(false)}
        onPressRight={handleFriendDelete}
      />
    </SafeAreaInsetsView>
  );
};
