import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import ArrowRet from "../../assets/GlyphProvider/glyph/Arrow/Glyph/arrow-left.svg";

interface ExpenseNavProps {
  title: string;
  titleColor: string;
  onLeftPress: () => void;
}

export const ExpenseNav = ({
  title,
  titleColor = "#FFFFFF",
  onLeftPress,
}: ExpenseNavProps) => {
  return (
    <View className="w-full bg-transparent flex-row items-center pt-4">
      <TouchableOpacity
        onPress={onLeftPress}
        className="pl-4 h-12 justify-center"
      >
        <View className="justify-center">
          <ArrowRet width={32} height={32} fill={titleColor} />
        </View>
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <Text className="text-3xl font-medium" style={{ color: titleColor }}>
          {title}
        </Text>
      </View>
      <View className="w-12 h-12" />
    </View>
  );
};
