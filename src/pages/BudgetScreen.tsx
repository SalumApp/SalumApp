import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery } from "@realm/react";
import React from "react";
import { ScrollView, Text, View } from "react-native";

import { MyButton } from "../components/Button/Button";
import BudgetCard from "../components/Card/BudgetCard";
import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const BudgetScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  // const categories = useQuery(Category);
  const categories = useQuery(Category, (allCategory) => {
    return allCategory.filtered(
      "isExpense == $0 && hasBudget == $1",
      true,
      true,
    );
  });

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_blue-100 dark:bg-s_blue-dark">
      <View className="h-4/5 bg-s_light-60 dark:bg-s_dark-100 absolute w-full bottom-0 rounded-t-3xl">
        {categories.length === 0 && (
          <View className="flex-1 items-center justify-center">
            <Text className="flex-col text-2xl dark:text-s_light-80 self-center align-middle">
              No Budgets Found
            </Text>
          </View>
        )}
        {categories.length !== 0 && (
          <ScrollView>
            <View className="pt-2" />
            <View>
              {categories.map((category) => {
                let usedAmount = 0;
                category
                  .linkingObjects<Transaction>("Transaction", "category")
                  .forEach((trans) => {
                    usedAmount += trans.amount;
                  });
                return (
                  <BudgetCard
                    key={category.title}
                    totalAmount={category.budget / 100}
                    usedAmount={usedAmount / 100}
                    categoryTitle={category.title}
                    categoryColor={category.color}
                    currency="USD"
                  />
                );
              })}
            </View>
          </ScrollView>
        )}
        <View className="h-20 mb-32">
          <MyButton
            onPress={() => navigation.navigate("new budget")}
            text="Create a Budget"
          />
        </View>
      </View>
    </SafeAreaInsetsView>
  );
};
