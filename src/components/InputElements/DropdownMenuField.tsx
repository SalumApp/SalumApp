import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import BottomSheet from "../Sheet/BottomSheet"; // Import the BottomSheet component

interface DropdownMenuFieldProps {
  options?: string[];
  placeholder?: string;
  onValueChange: (value: string) => void;
}

const DropdownMenuField = ({
  options = [],
  placeholder = "Select category",
  onValueChange,
}: DropdownMenuFieldProps) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsBottomSheetVisible(true);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onValueChange(option);
    setIsBottomSheetVisible(false);
  };

  return (
    <View className="relative px-4">
      <TouchableOpacity
        className="flex-row items-center justify-between h-20 bg-white border border-gray-300 rounded-3xl px-4"
        onPress={handleToggle}
      >
        <Text
          className="text-2xl"
          style={{ color: selectedOption ? "#000000" : "#9CA3AF" }}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {selectedOption || placeholder}
        </Text>
        <Ionicons
          name={isBottomSheetVisible ? "chevron-up" : "chevron-down"}
          size={24}
          color={selectedOption ? "#000000" : "#9CA3AF"}
        />
      </TouchableOpacity>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={options}
        onOptionSelect={handleSelect}
      />
    </View>
  );
};

export default DropdownMenuField;
