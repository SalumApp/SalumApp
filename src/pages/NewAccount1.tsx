import * as React from "react";
import { Text, View } from "react-native";

import { MyButton } from "../components/Button/Button";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface NewAccount1Props {
  onPress: () => void;
}

export const NewAccount1 = ({ onPress }: NewAccount1Props) => {
  return (
    <SafeAreaInsetsView className="flex-1 bg-white w-full h-full">
      <View className="mt-16 flex-row">
        <Text
          className="text-5xl pl-4 text-s_dark-100 w-5/6"
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          Let's setup your account!
        </Text>
      </View>
      <View className="mt-8 flex-row">
        <Text
          className="text-s_dark-100 text-2xl pl-4 w-5/6"
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          Account can be your bank, credit card or your wallet.
        </Text>
      </View>
      <View className="flex-1" />
      <View className="mb-8 h-20">
        <MyButton onPress={onPress} text="Let's go" />
      </View>
    </SafeAreaInsetsView>
  );
};
