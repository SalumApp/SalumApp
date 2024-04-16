import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph/IconGlyph";

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
      <IconGlyph glyph="Arrow-left" dim={32} fill={titleColor} />
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
      <IconGlyph glyph="More" dim={32} fill={titleColor} />
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
