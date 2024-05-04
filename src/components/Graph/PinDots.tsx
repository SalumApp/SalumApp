import React from "react";
import { View } from "react-native";

interface PinDotsProps {
  pinLength: number;
}

const PinDots: React.FC<PinDotsProps> = ({ pinLength }) => {
  return (
    <View className="flex-row justify-center items-center">
      {Array.from({ length: 4 }, (_, index) => (
        <View
          key={index}
          className={`w-7 h-7 rounded-full border ${
            index < pinLength
              ? "bg-s_light-80  border-s_light-80"
              : "bg-s_blue-100 dark:bg-s_blue-dark border-s_blue-40"
          } border-4 mx-3`}
        />
      ))}
    </View>
  );
};

export default PinDots;
