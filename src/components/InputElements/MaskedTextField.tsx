import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import HideSvg from "../../assets/GlyphProvider/glyph/User Interface/Glyph/hide.svg"; // Direct SVG import
import ShowSvg from "../../assets/GlyphProvider/glyph/User Interface/Glyph/show.svg"; // Direct SVG import

const MaskedTextField = ({ customPlaceholder = "Input..." }) => {
  const [value, setValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="relative p-4">
      <TextInput
        className="h-16 bg-white dark:bg-s_dark-75 border border-gray-300 rounded-2xl px-4 pr-14 text-xl"
        onChangeText={setValue}
        value={value}
        placeholder={customPlaceholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        className="absolute inset-y-0 right-7 flex justify-center items-center" // Adjust for alignment
      >
        {isPasswordVisible ? (
          <HideSvg width={30} height={30} fill="#91919F" />
        ) : (
          <ShowSvg width={30} height={30} fill="#91919F" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MaskedTextField;
