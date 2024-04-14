import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import DropdownSvg from "../../assets/GlyphProvider/glyph/Arrow/Glyph/arrow-down.svg";

interface PillButtonProps {
  onPress: () => void;
  text: string;
  glyph?: string;
}

export const PillButton = ({ onPress, text, glyph }: PillButtonProps) => {
  let Glyph = <View />;
  if (typeof glyph !== "undefined") {
    Glyph = <DropdownSvg width={25} height={25} fill="#91919F" />;
  }

  return (
    <TouchableOpacity
      className="flex items-center justify-center self-center px-4 py-4 border border-s_light-40 rounded-full"
      onPress={onPress}
    >
      <View className="flex flex-row items-center justify-center">
        {Glyph}
        <Text className="pl-4 pr-4 text-center text-black text-2xl font-medium">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
