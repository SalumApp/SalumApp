import React, { useState } from "react";
import { TextInput, View } from "react-native";

interface PlainTextFieldProp {
  customPlaceholder: string;
  onTextChange: (value: string) => void;
}

const PlainTextField = ({
  customPlaceholder = "Input...",
  onTextChange,
}: PlainTextFieldProp) => {
  const [valueText, setValue] = useState("");

  const handleFreqChange = (value: string) => {
    setValue(value);
    onTextChange(value);
  };

  return (
    <View className="relative p-4">
      <TextInput
        className="h-20 bg-white dark:bg-s_dark-75 dark:text-s_light-80 border border-gray-300 rounded-3xl px-4 text-2xl"
        onChangeText={handleFreqChange}
        value={valueText}
        placeholder={customPlaceholder}
        placeholderTextColor={valueText === "" ? "#9CA3AF" : "#000000"}
      />
    </View>
  );
};

export default PlainTextField;
