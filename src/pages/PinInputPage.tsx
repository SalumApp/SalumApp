import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { IconGlyph } from "../assets/Glyph";
import PinDots from "../components/Graph/PinDots";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface PinInputProps {
  setAuthentication: () => void;
}

const PinInput = ({ setAuthentication }: PinInputProps) => {
  const [correctPin, setCorrectPin] = useState(null);
  const [pin, setPin] = useState("");

  useEffect(() => {
    const getCorrectPin = async () => {
      const result = await SecureStore.getItemAsync("salum.pin");
      setCorrectPin(result);
    };
    getCorrectPin();
  });

  const handleKeyPress = (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      console.log("Current PIN:", newPin);
      if (newPin.length === 4) {
        if (correctPin === newPin) {
          setAuthentication();
        } else {
          setPin("");
          alert("Incorrect pin entered. Please try again");
        }
      }
    }
  };

  const handleDelete = () => {
    setPin((prevPin) => {
      const newPin = prevPin.slice(0, -1);
      console.log("Current PIN:", newPin);
      return newPin;
    });
  };

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_blue-100 dark:bg-s_blue-dark">
      <View className="items-center mt-8">
        <Text className="text-2xl font-medium text-s_light-100">
          Enter you PIN to continue
        </Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <PinDots pinLength={pin.length} />
      </View>
      <View className="p-4">
        <View className="flex-row justify-between mb-4">
          {["1", "2", "3"].map((digit) => (
            <TouchableOpacity
              key={digit}
              onPress={() => handleKeyPress(digit)}
              className="w-24 h-24 justify-center items-center"
            >
              <Text className="text-6xl font-medium text-s_light-100">
                {digit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-between mb-4">
          {["4", "5", "6"].map((digit) => (
            <TouchableOpacity
              key={digit}
              onPress={() => handleKeyPress(digit)}
              className="w-24 h-24 justify-center items-center"
            >
              <Text className="text-6xl font-medium text-s_light-100">
                {digit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-between mb-4">
          {["7", "8", "9"].map((digit) => (
            <TouchableOpacity
              key={digit}
              onPress={() => handleKeyPress(digit)}
              className="w-24 h-24 justify-center items-center"
            >
              <Text className="text-6xl font-medium text-s_light-100">
                {digit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={handleDelete}
            className="w-24 h-24 rounded-full justify-center items-center"
          >
            <IconGlyph glyph="Backspace" dim={32} fill="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("0")}
            className="w-24 h-24 justify-center items-center"
          >
            <Text className="text-6xl font-medium text-s_light-100">0</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-24 h-24 rounded-full justify-center items-center" />
        </View>
      </View>
    </SafeAreaInsetsView>
  );
};

export default PinInput;
