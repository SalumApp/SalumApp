import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";

import { ThemeColor } from "../../utils/Theme"; // Import the BottomSheet component
import BottomSheet from "../Sheet/BottomSheet";

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
  const colorScheme = useColorScheme();

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
        className="flex-row items-center justify-between h-20 bg-white dark:bg-s_dark-75 border border-gray-300 rounded-3xl px-4"
        onPress={handleToggle}
      >
        <Text
          className="text-2xl"
          style={{
            color: selectedOption
              ? colorScheme === "dark"
                ? ThemeColor.s_light["80"]
                : ThemeColor.s_dark["100"]
              : "#9CA3AF",
          }}
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
