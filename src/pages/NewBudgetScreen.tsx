import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery, useRealm } from "@realm/react";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";

import BudgetForm from "../components/Form/BudgetForm";
import { ExpenseNav } from "../components/Navigation/ExpenseNav";
import BottomSheet from "../components/Sheet/BottomSheet";
import { Category } from "../models/Category";
import { currencies } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const NewBudgetScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const realm = useRealm();

  const [key, setKey] = React.useState(0);

  const categories = useQuery(Category, (collection) => {
    return collection.filtered("isExpense != $0", false);
  });

  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [amountInCents, setAmountInCents] = React.useState(0);
  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setIsBottomSheetVisible(false);
  };

  const getCurrencySymbol = (currency: string) => {
    const supportedCurrencies = formatCurrency({ amount: 0, code: currency });
    return supportedCurrencies[2];
  };

  const handleAmountChange = (value: string) => {
    setAmountInCents(parseInt(value, 10));
  };

  const formatCentsToDollars = (cents: number): string => {
    const dollars = Math.floor(cents / 100);
    const remainingCents = cents % 100;
    return `${dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${remainingCents.toString().padStart(2, "0")}`;
  };

  const handleConfirmation = () => {
    realm.write(() => {
      selectedCategory.hasBudget = true;
      selectedCategory.budget = amountInCents;
    });
    setKey((prevKey) => prevKey + 1);
    setAmountInCents(0);
    navigation.navigate("budget");
  };

  return (
    <SafeAreaInsetsView key={key} className="flex-1 bg-s_blue-100">
      <ExpenseNav
        title="New Budget"
        titleColor="#FFFFFF"
        onLeftPress={() => navigation.navigate("budget")}
      />
      <View className="w-full h-full">
        <View className="flex-row">
          <TouchableOpacity
            onPress={() => setIsBottomSheetVisible(true)}
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
            value={formatCentsToDollars(amountInCents)}
            onChangeText={(text) =>
              handleAmountChange(text.replace(/[^0-9]/g, ""))
            }
            placeholder="0.00"
          />
        </View>
        <BudgetForm
          onConfirmation={handleConfirmation}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
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
