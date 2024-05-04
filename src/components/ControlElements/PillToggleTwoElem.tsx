import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PillToggleTwoElemProps {
  onPressLeft: () => void;
  onPressRight: () => void;
  isEnabled: boolean;
  optionsToggle?: string[];
}

export const PillToggleTwoElem = ({
  onPressLeft,
  onPressRight,
  isEnabled,
  optionsToggle = ["Asset", "Liability"],
}: PillToggleTwoElemProps) => {
  return (
    <View className="w-full h-16 flex-row items-center rounded-full bg-s_light-40 dark:bg-s_dark-25 overflow-hidden">
      <View className="flex-row w-full h-full">
        <TouchableOpacity
          className={`w-1/2 h-full rounded-full justify-center items-center ${isEnabled ? "bg-s_blue-100" : "bg-s_light-40 dark:bg-s_dark-25"}`}
          onPress={() => onPressLeft()}
        >
          <Text
            className={`text-2xl font-medium ${isEnabled ? "text-s_light-80" : "text-s_dark-100 dark:text-s_light-80"}`}
          >
            {optionsToggle[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`w-1/2 h-full rounded-full justify-center items-center ${!isEnabled ? "bg-s_blue-100" : "bg-s_light-40 dark:bg-s_dark-25"}`}
          onPress={() => onPressRight()}
        >
          <Text
            className={`text-2xl font-medium ${!isEnabled ? "text-s_light-80 " : "text-s_dark-100 dark:text-s_light-80"}`}
          >
            {optionsToggle[1]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
