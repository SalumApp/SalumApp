import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PillToggleTwoElemProps {
  onToggle: () => void;
  isEnabled: boolean;
  optionsToggle?: string[];
}

export const PillToggleTwoElem = ({
  onToggle,
  optionsToggle = ["Asset", "Liability"],
}: PillToggleTwoElemProps) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const onTogglePress = (valButton = false) => {
    onToggle();
    setIsEnabled(valButton);
  };

  return (
    <View className="w-full h-24 flex-row items-center rounded-full bg-s_light-40 overflow-hidden">
      <View className="flex-row w-full h-full">
        <TouchableOpacity
          className={`w-1/2 h-full rounded-full justify-center items-center ${isEnabled ? "bg-s_blue-100" : "bg-s_light-40"}`}
          onPress={() => onTogglePress(true)}
        >
          <Text
            className={`text-2xl font-medium ${isEnabled ? "text-s_light-80" : "text-s_dark-100"}`}
          >
            {optionsToggle[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`w-1/2 h-full rounded-full justify-center items-center ${!isEnabled ? "bg-s_blue-100" : "bg-s_light-40"}`}
          onPress={() => onTogglePress(false)}
        >
          <Text
            className={`text-2xl font-medium ${!isEnabled ? "text-s_light-80" : "text-s_dark-100"}`}
          >
            {optionsToggle[1]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
