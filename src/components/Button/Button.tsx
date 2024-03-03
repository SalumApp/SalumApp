import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity
      className="self-center px-8 py-2 !bg-black rounded-lg native:active:bg-sky-600"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-bold">{text}</Text>
    </TouchableOpacity>
  );
};
