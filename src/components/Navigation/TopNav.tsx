import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import ArrowRet from "../../assets/GlyphProvider/glyph/Arrow/Glyph/arrow-left.svg";
import More from "../../assets/GlyphProvider/glyph/User Interface/Glyph/more.svg";

interface TopNavProps {
  title: string;
  onLeftPress: () => void;
  onRightPress: () => void;
}

export const TopNav = ({ title, onLeftPress, onRightPress }: TopNavProps) => {
  return (
    <View className="w-full bg-transparent flex-row items-center justify-between pt-4">
      <TouchableOpacity onPress={onLeftPress} className="pl-4">
        <ArrowRet width={32} height={32} />
      </TouchableOpacity>
      <Text className="text-lg font-bold flex-1 text-center">{title}</Text>
      <TouchableOpacity onPress={onRightPress} className="pr-4">
        <More width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
};
