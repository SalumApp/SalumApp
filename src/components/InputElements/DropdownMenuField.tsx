import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, useColorScheme } from "react-native";

import { ThemeColor } from "../../utils/Theme"; // Import the BottomSheet component
import BottomSheet from "../Sheet/BottomSheet";

interface DropdownMenuFieldProps {
  options?: string[];
  placeHolder?: string;
  onValueChange: (value: string) => void;
  currentSelection: string;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

const DropdownMenuField = ({
  options = [],
  placeHolder = "Select category",
  onValueChange,
  currentSelection,
  className,
  disabled,
  ...props
}: DropdownMenuFieldProps) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const colorScheme = useColorScheme();

  const handleToggle = () => {
    if (disabled) return;
    setIsBottomSheetVisible(true);
  };

  const handleSelect = (option: string) => {
    onValueChange(option);
    setIsBottomSheetVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        className={
          className ||
          "flex-row mx-4 px-4 items-center justify-between h-20 bg-white dark:bg-s_dark-75 border border-gray-300 rounded-3xl"
        }
        onPress={handleToggle}
      >
        <Text
          className="text-2xl"
          style={{
            color:
              currentSelection && !disabled
                ? colorScheme === "dark"
                  ? ThemeColor.s_light["80"]
                  : ThemeColor.s_dark["100"]
                : "#9CA3AF",
          }}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {currentSelection || placeHolder}
        </Text>
        <Ionicons
          name={isBottomSheetVisible ? "chevron-up" : "chevron-down"}
          size={24}
          color={currentSelection ? "#000000" : "#9CA3AF"}
        />
      </TouchableOpacity>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={options}
        onOptionSelect={handleSelect}
      />
    </>
  );
};

export default DropdownMenuField;
