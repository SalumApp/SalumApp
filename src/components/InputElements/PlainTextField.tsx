import React, { useState } from "react";
import { View, TextInput } from "react-native";

const PlainTextField = ({ customPlaceholder = "Input..." }) => {
  const [valueText, setValue] = useState("");

  return (
    <View className="relative p-4">
      <TextInput
        className="h-20 bg-white border border-gray-300 rounded-3xl px-4 text-2xl"
        onChangeText={setValue}
        value={valueText}
        placeholder={customPlaceholder}
        placeholderTextColor={valueText === "" ? "#9CA3AF" : "#000000"}
      />
    </View>
  );
};

export default PlainTextField;
