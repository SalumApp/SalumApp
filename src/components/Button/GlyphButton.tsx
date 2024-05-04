import React from "react";
import { TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";

interface GlyphButtonProps {
  onPress: () => void;
  glyphLeft?: string;
  glyphRight?: string;
}

export const GlyphButton = ({
  onPress,
  glyphLeft = "Arrow-down-2",
  glyphRight = "Pie-chart",
}: GlyphButtonProps) => {
  return (
    <TouchableOpacity
      className="flex items-center justify-center bg-s_light-80 dark:bg-s_dark_navy-75 self-center px-2 py-2 border border-s_light-40 rounded-2xl"
      onPress={onPress}
    >
      <View className="flex flex-row items-center justify-between">
        <View className="ml-1 mr-4">
          <IconGlyph glyph={glyphLeft} dim={32} fill="#91919F" />
        </View>
        <View className="ml-3 mr-1">
          <IconGlyph glyph={glyphRight} dim={36} fill="#0077FF" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
