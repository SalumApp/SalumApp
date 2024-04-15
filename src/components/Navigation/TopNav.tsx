import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import ArrowRet from "../../assets/GlyphProvider/glyph/Arrow/Glyph/arrow-left.svg";
import More from "../../assets/GlyphProvider/glyph/User Interface/Glyph/more.svg";

interface TopNavProps {
  title?: string;
  titleColor?: string;
  bgColor?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export const TopNav = ({
  title,
  bgColor = "transparent",
  titleColor = "#000000",
  onLeftPress,
  onRightPress,
  left,
  center,
  right,
}: TopNavProps) => {
  const defaultLeft = onLeftPress && (
    <TouchableOpacity onPress={onLeftPress} className="pl-5">
      <ArrowRet fill={titleColor} width={32} height={32} />
    </TouchableOpacity>
  );

  const defaultCenter = title && (
    <Text
      className="text-3xl font-bold flex-1 text-center"
      style={{ color: titleColor }}
    >
      {title}
    </Text>
  );

  const defaultRight = onRightPress && (
    <TouchableOpacity onPress={onRightPress} className="pr-5">
      <More fill={titleColor} width={32} height={32} />
    </TouchableOpacity>
  );

  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="w-full bg-transparent flex-row items-center justify-between pt-4"
    >
      {left || defaultLeft}
      {center || defaultCenter}
      {right || defaultRight}
    </View>
  );
};
