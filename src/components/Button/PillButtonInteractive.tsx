import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PillButtonInteractiveProps {
  onPress: () => void;
  isPressed: boolean;
  text: string;
  height: number;
  width: number;
  textSize: string;
}

export const PillButtonInteractive = ({
  onPress,
  isPressed,
  text,
  height,
  width,
  textSize,
}: PillButtonInteractiveProps) => {
  return (
    <TouchableOpacity
      className={`h-${height} w-${width} flex items-center justify-center self-center px-4 border ${
        isPressed
          ? "bg-s_blue-20 border-s_light-100"
          : "bg-s_light-100 border-s_light-40"
      } rounded-full`}
      onPress={onPress}
    >
      <View className="flex flex-row items-center justify-center">
        <Text
          className={`text-center text-${textSize} font-medium ${
            isPressed ? "text-s_blue-100" : "text-s_dark-100"
          }`}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
