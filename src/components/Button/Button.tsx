import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
  widthButton?: string;
}

export const MyButton = ({
  onPress,
  text,
  color = "bg-s_blue-100 dark:bg-s_blue-100",
  textColor = "s_light-100",
  widthButton = "11/12",
}: MyButtonProps) => {
  return (
    <TouchableOpacity
      className={`mx-2 flex items-center justify-center self-center ${color} rounded-3xl flex-1 w-${widthButton} min-h-16`}
      onPress={onPress}
    >
      <Text className={`text-center text-${textColor} text-2xl font-medium`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
