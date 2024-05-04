import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Realm from "realm";

import { OnBoardingContextType, useOnBoardingContext } from "../../App";
import { IconGlyph } from "../assets/Glyph";
import PinDots from "../components/Graph/PinDots";
import { schemas } from "../models";
import { currencies, mainCurrency } from "../utils/Config";
import { bytesToBase64 } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";

const initializeDatabase = async (onboardingcontext: OnBoardingContextType) => {
  const randomKey = await Crypto.getRandomBytesAsync(64);
  const encoded = bytesToBase64(randomKey);
  await SecureStore.setItemAsync("salum.databaseKey", encoded);
  onboardingcontext.setRealmKey(randomKey);

  const realm = await Realm.open({
    schema: schemas,
    encryptionKey: randomKey,
  });

  const dataEntries = realm.objects("Category");

  if (dataEntries.length === 0) {
    realm.write(() => {
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Uncategorized",
        color: "rgb(253 60 74)",
        glyph: "More",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Grocery",
        isExpense: true,
        color: "rgb(238 165 25)",
        glyph: "Cart",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Dining",
        isExpense: true,
        color: "rgb(0 168 107)",
        glyph: "Restaurant",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Bills & Utilities",
        isExpense: true,
        color: "rgb(127 61 255)",
        glyph: "Recurring-bill",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Transport",
        isExpense: true,
        color: "rgb(0 119 255)",
        glyph: "Car",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Travel",
        isExpense: true,
        color: "rgb(22, 23, 25)",
        glyph: "Airplane",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Shopping",
        isExpense: true,
        color: "rgb(0, 121, 178)",
        glyph: "Shopping-bag",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Wages",
        isExpense: false,
        color: "rgb(0 119 255)",
        glyph: "Salary",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Passive",
        isExpense: false,
        color: "rgb(238 165 25)",
        glyph: "Piggy-bank",
        hasBudget: false,
      });
      realm.create("Category", {
        _id: new Realm.BSON.UUID(),
        title: "Investment",
        isExpense: false,
        color: "rgb(0 168 107)",
        glyph: "Presentation-3",
        hasBudget: false,
      });

      for (const ccy in currencies) {
        const { symbol, name, minorUnits } = currencies[ccy];
        realm.create("Currency", {
          code: ccy,
          name,
          enabled: true,
          symbol,
          minorUnits,
          fromUSD: 1,
          toUSD: 1,
        });
      }
    });
  }

  const initialAccount = realm.objects("Account");
  if (initialAccount.length === 0) {
    realm.write(() => {
      const defaultCurrency = realm.objectForPrimaryKey(
        "Currency",
        mainCurrency,
      );
      realm.create("Account", {
        _id: new Realm.BSON.UUID(),
        title: "Cash",
        type: "Cash",
        currency: defaultCurrency,
        isCredit: false,
        color: "rgb(0 119 255)",
        glyph: "Piggy-bank",
      });
    });
  }
  realm.close();
  console.log("Realm closed");
};

export const SetupPinInput = () => {
  const onBoardingContext = useOnBoardingContext();
  const [firstInput, setFirstInput] = useState(true);
  const [pin, setPin] = useState("");
  const [tmpPin, setTmpPin] = useState("");

  const handleKeyPress = async (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      console.log("Current PIN:", newPin);
      if (newPin.length === 4) {
        if (firstInput) {
          setTmpPin(pin);
          setFirstInput(false);
          setPin("");
        } else {
          if (tmpPin === pin) {
            await SecureStore.setItemAsync("salum.pin", newPin);
            await initializeDatabase(onBoardingContext);
            await AsyncStorage.setItem("salum.user.onboarded", "true");
            onBoardingContext.completeOnboarding();
          } else {
            alert("Pin does not match, please try again!");
            setFirstInput(true);
            setPin("");
            setTmpPin("");
          }
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
          {firstInput ? "Let's setup your pin." : "Ok. Retype your PIN again."}
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
