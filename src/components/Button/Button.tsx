import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity
      className="flex items-center justify-center self-center px-8 py-2 bg-blue-500 rounded-3xl flex-1 mt-4 w-11/12 h-16 ml-8 mr-8"
      onPress={onPress}
    >
      <Text className="text-center text-white text-2xl font-medium">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
