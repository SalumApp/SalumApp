import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useObject, useQuery, useRealm } from "@realm/react";
import React from "react";
import { Text, TextInput, View } from "react-native";

import BudgetForm from "../components/Form/BudgetForm";
import { ExpenseNav } from "../components/Navigation/ExpenseNav";
import { Category } from "../models/Category";
import { Currency } from "../models/Currency";
import { mainCurrency } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const NewBudgetScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const realm = useRealm();

  const [key, setKey] = React.useState(0);

  const categories = useQuery(Category, (collection) => {
    return collection.filtered("isExpense != $0", false);
  });

  const defaultCurrency = useObject(Currency, mainCurrency);
  console.log(categories[0]);
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const [amountInCents, setAmountInCents] = React.useState(0);

  const handleAmountChange = (value: string) => {
    setAmountInCents(parseInt(value, 10));
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
    <SafeAreaInsetsView
      key={key}
      className="flex-1 bg-s_blue-100 dark:bg-s_blue-dark"
    >
      <ExpenseNav
        title="New Budget"
        titleColor="#FFFFFF"
        onLeftPress={() => navigation.navigate("budget")}
      />
      <View className="w-full h-full">
        <View className="mt-4 pt-5 flex-row items-center">
          <Text className="text-white text-3xl pl-8 mr-1">
            {defaultCurrency.symbol}
          </Text>
          <TextInput
            className="text-s_light-100 text-6xl m-1 pr-5 pt-3 flex-1"
            keyboardType="number-pad"
            textAlign="left"
            value={defaultCurrency.getInputAmountString(amountInCents)}
            onChangeText={(text) =>
              handleAmountChange(text.replace(/[^0-9]/g, ""))
            }
            placeholder="0.00"
            defaultValue="0.00"
            onSubmitEditing={() => {
              // Dismiss the keyboard when the user presses the "Done" button
              TextInput.State.currentlyFocusedInput()?.blur();
            }}
            onBlur={() => {
              // Stop entering the number when the input loses focus
              setAmountInCents(parseInt(amountInCents.toString(), 10));
            }}
          />
        </View>
        <BudgetForm
          onConfirmation={handleConfirmation}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          currentCategorySelection={selectedCategory.title}
        />
      </View>
    </SafeAreaInsetsView>
  );
};
