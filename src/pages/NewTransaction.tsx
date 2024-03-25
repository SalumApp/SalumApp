import * as React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { formatCurrency } from "react-native-format-currency";

import TransactionForm from "../components/Form/TransactionForm";
import BottomSheet from "../components/Sheet/BottomSheet";

interface NewTransactionProps {
  transactionType: string;
  onConfirmation: () => void;
}

export const NewTransaction = ({
  transactionType,
  onConfirmation,
}: NewTransactionProps) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [amount, setAmount] = React.useState("0");
  const currencies = [
    "USD",
    "EUR",
    "JPY",
    "GBP",
    "CNY",
    "AUD",
    "CAD",
    "CHF",
    "HKD",
    "TWD",
    "PLN",
  ];
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

  let bg_color = "#EEA519";

  if (transactionType === "expense") {
    bg_color = "#FD3C4A";
  } else if (transactionType === "income") {
    bg_color = "#00A86B";
  }

  return (
    <View className="flex-1" style={{ backgroundColor: `${bg_color}` }}>
      <View className="w-full h-full">
        <View className="flex-row">
          <TouchableOpacity
            onPress={handleCurrencyPress}
            className="pl-4 mt-12"
          >
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
        <TransactionForm onConfirmation={onConfirmation} />
      </View>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={currencies}
        onOptionSelect={handleCurrencySelect}
      />
    </View>
  );
};
