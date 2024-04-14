import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";

import NewAccountForm from "../components/Form/NewAccountForm";
import BottomSheet from "../components/Sheet/BottomSheet";
import { currencies } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface NewTransactionProps {
  onConfirmation: () => void;
}

export const NewAccount2 = ({ onConfirmation }: NewTransactionProps) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [amount, setAmount] = React.useState("0");

  const handleCurrencyPress = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setIsBottomSheetVisible(false);
  };

  const getCurrencySymbol = (currency: string) => {
    const supportedCurrencies = formatCurrency({ amount: 0, code: currency });
    return supportedCurrencies[2];
  };

  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (value: string) => {
    const formattedValue = formatNumber(value.replace(/,/g, ""));
    setAmount(formattedValue);
  };

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_blue-100">
      <View className="w-full h-full">
        <View className="flex-1" />
        <View className="flex-row">
          <TouchableOpacity
            onPress={handleCurrencyPress}
            className="pl-4 mt-12"
          >
            <Text className="text-2xl rounded-lg pl-4 text-s_light-80 opacity-65">
              Balance
            </Text>
            <Text className="text-2xl rounded-lg w-20 pl-4 text-s_light-80 opacity-65">
              {selectedCurrency}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row items-center">
          <Text className="text-white text-3xl pl-8 mr-1">
            {getCurrencySymbol(selectedCurrency)}
          </Text>
          <TextInput
            className="text-s_light-100 text-6xl ml-1 mr-1 mt-3 flex shrink"
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
        <NewAccountForm onConfirmation={onConfirmation} />
      </View>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={currencies}
        onOptionSelect={handleCurrencySelect}
      />
    </SafeAreaInsetsView>
  );
};
