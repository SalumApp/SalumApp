import { Slider } from "@rneui/themed";
import React from "react";
import { View, TextInput } from "react-native";

interface ColorSliderProps {
  value: number;
  onValueChange: (value: number) => void;
  component: "r" | "g" | "b";
}

const ColorSlider: React.FC<ColorSliderProps> = ({
  value,
  onValueChange,
  component,
}) => {
  const backgroundColor = `rgb(${component === "r" ? value : 0}, ${
    component === "g" ? value : 0
  }, ${component === "b" ? value : 0})`;

  return (
    <View className="flex-row items-center">
      <Slider
        value={value}
        onValueChange={onValueChange}
        maximumValue={255}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{
          height: 10,
          backgroundColor,
          borderRadius: 5,
        }}
        thumbStyle={{
          height: 20,
          width: 20,
          backgroundColor,
          borderRadius: 10,
          shadowColor: backgroundColor,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 5,
        }}
        style={{ flex: 1, marginRight: 10 }}
      />
      <TextInput
        className="w-16 h-8 rounded text-center font-medium text-2xl text-s_dark-100 dark:text-s_light-100"
        value={value.toString()}
        onChangeText={(text) => onValueChange(Number(text))}
        keyboardType="numeric"
      />
    </View>
  );
};

export default ColorSlider;
