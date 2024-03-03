import React from "react";
import { View, TouchableOpacity } from "react-native";

interface RadioButtonProps {
  isSelected: boolean;
  onSelect: () => void;
}

export const RadioButton = ({ isSelected, onSelect }: RadioButtonProps) => {
  return (
    <TouchableOpacity onPress={onSelect} className="flex-row items-center">
      <View className="w-6 h-6 rounded-full border-2 border-blue-500 justify-center items-center mr-2">
        {isSelected && <View className="w-4 h-4 bg-blue-500 rounded-full" />}
      </View>
    </TouchableOpacity>
  );
};
