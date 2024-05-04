import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MyButton } from "../Button/Button";
import ColorSlider from "../ControlElements/ColorSlider";

interface ColorPickerBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onColorSelect: (color: string) => void;
}

const DEFAULT_COLORS = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 165, 0)",
  "rgb(255,105,180)",
  "rgb(75,0,130)",
  "rgb(0, 100, 0)",
];

const ColorPickerBottomSheet: React.FC<ColorPickerBottomSheetProps> = ({
  visible,
  onClose,
  onColorSelect,
}) => {
  const [customColor, setCustomColor] = useState({ r: 0, g: 0, b: 0 });

  const handleCustomColorChange = (
    value: number,
    component: "r" | "g" | "b",
  ) => {
    setCustomColor((prevColor) => ({
      ...prevColor,
      [component]: value,
    }));
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={100} tint="dark" className="flex-1">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <View className="bg-s_light-100 dark:bg-s_dark-100 rounded-t-3xl overflow-hidden">
          <View className="items-center py-2.5 pt-4">
            <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1" />
          </View>
          <View>
            <View className="flex-row flex-wrap justify-center py-4 px-2">
              {DEFAULT_COLORS.map((color) => (
                <TouchableOpacity
                  key={color}
                  onPress={() => onColorSelect(color)}
                  className="w-16 h-16 rounded-full m-2"
                  style={{ backgroundColor: color }}
                />
              ))}
            </View>
            <View className="p-4 mx-2">
              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-4xl font-medium text-s_dark-100 dark:text-s_light-100">
                  Custom Color
                </Text>
                <View
                  className="h-16 w-16 bg-s_blue-100 rounded-full border border-s_light-40"
                  style={{
                    backgroundColor: `rgb(${customColor.r}, ${customColor.g}, ${customColor.b})`,
                  }}
                />
              </View>
              <ColorSlider
                value={customColor.r}
                onValueChange={(value) => handleCustomColorChange(value, "r")}
                component="r"
              />
              <ColorSlider
                value={customColor.g}
                onValueChange={(value) => handleCustomColorChange(value, "g")}
                component="g"
              />
              <ColorSlider
                value={customColor.b}
                onValueChange={(value) => handleCustomColorChange(value, "b")}
                component="b"
              />
            </View>
            <View className="h-20 my-2 mb-4 mx-2">
              <MyButton
                onPress={() =>
                  onColorSelect(
                    `rgb(${customColor.r}, ${customColor.g}, ${customColor.b})`,
                  )
                }
                text="Set Custom Color"
              />
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default ColorPickerBottomSheet;
