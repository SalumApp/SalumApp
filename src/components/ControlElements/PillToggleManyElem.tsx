import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PillToggleManyElemProps {
  labels: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const PillToggleManyElem = ({
  labels,
  selectedIndex,
  onSelect,
}: PillToggleManyElemProps) => {
  return (
    <View className="w-full h-16 flex-row items-center rounded-full bg-s_light-40 dark:bg-s_dark-25 overflow-hidden">
      <View className="flex-row w-full h-full">
        {labels.map((label, index) => (
          <TouchableOpacity
            key={index}
            className={`flex-1 h-full rounded-full justify-center items-center ${
              selectedIndex === index
                ? "bg-s_blue-100"
                : "bg-s_light-40 dark:bg-s_dark-25"
            }`}
            onPress={() => onSelect(index)}
          >
            <Text
              className={`text-2xl font-medium ${
                selectedIndex === index
                  ? "text-s_light-80"
                  : "text-s_dark-100 dark:text-s_light-80"
              }`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
