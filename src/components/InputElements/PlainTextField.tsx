import React, { useState } from "react";
import { View, TextInput } from "react-native";

const PlainTextField = ({ customPlaceholder = "Input..." }) => {
  const [value, setValue] = useState("");

  return (
    <View className="relative p-4">
      <TextInput
        className="h-16 bg-white border border-gray-300 rounded-2xl px-4 text-xl"
        onChangeText={setValue}
        value={value}
        placeholder={customPlaceholder}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};

export default PlainTextField;
