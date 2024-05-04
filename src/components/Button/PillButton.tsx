import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";

interface PillButtonProps {
  onPress: () => void;
  text: string;
  glyph?: string;
}

export const PillButton = ({ onPress, text, glyph }: PillButtonProps) => {
  return (
    <TouchableOpacity
      className="flex items-center justify-center self-center px-4 py-4 border border-s_light-40 rounded-full"
      onPress={onPress}
    >
      <View className="flex flex-row items-center justify-center">
        {typeof glyph !== "undefined" && (
          <IconGlyph glyph="Arrow-down-2" dim={25} fill="#91919F" />
        )}
        <Text className="pl-4 pr-4 text-center text-s_dark-100 dark:text-s_light-80 text-2xl font-medium">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
