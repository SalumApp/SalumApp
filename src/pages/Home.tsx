import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery } from "@realm/react";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { Results } from "realm";

import CashflowCard from "../components/Card/CashflowCard";
import NetWorthCard from "../components/Card/NetWorthCard";
import { TopNav } from "../components/Navigation/TopNav";
import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";
import { getIcon } from "../utils/GlyphProvider";
import { formatCurrency } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const categories = useQuery(Category, (collection) => {
    return collection.filtered("title != $0", "Uncategorized");
  });
  const expenseCategories: Results<Category> = categories.filtered(
    "isExpense == $0",
    true,
  );
  const incomeCategories: Results<Category> = categories.filtered(
    "isExpense == $0",
    false,
  );
  const budgetedCategories: Results<Category> = expenseCategories.filtered(
    "hasBudget == $0",
    true,
  );
  const colorScheme = useColorScheme();

  const amountByExpenseCategory: number[] = new Array(
    expenseCategories.length,
  ).fill(0);
  for (let i = 0; i < expenseCategories.length; i++) {
    expenseCategories[i]
      .linkingObjects<Transaction>("Transaction", "category")
      .forEach((trans) => {
        amountByExpenseCategory[i] += trans.amount;
      });
  }
  const expenseSum = amountByExpenseCategory.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0,
  );

  let totalBudget = 0;
  let budgetedSpend = 0;
  if (budgetedCategories.length > 0) {
    budgetedCategories.forEach((i) => {
      totalBudget += i.budget;
      i.linkingObjects<Transaction>("Transaction", "category")
          .forEach((trans) => {
            budgetedSpend += trans.amount;
          });
    });
  }

  const amountByIncomeCategory: number[] = new Array(
    incomeCategories.length,
  ).fill(0);
  for (let i = 0; i < incomeCategories.length; i++) {
    incomeCategories[i]
      .linkingObjects<Transaction>("Transaction", "category")
      .forEach((trans) => {
        amountByIncomeCategory[i] += trans.amount;
      });
  }
  const incomeSum = amountByIncomeCategory.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0,
  );

  let gradientColor = ["rgb(255, 246, 229)", "rgb(248, 237, 216)"];

  if (colorScheme === "dark") {
    gradientColor = ["rgb(0, 11, 21)", "rgb(0, 0, 0)"];
  }

  return (
    <View
      className="flex-1 w-max overflow-hidden"
      style={{ height: useWindowDimensions().height }}
    >
      <LinearGradient
        style={{
          width: useWindowDimensions().width,
          height: useWindowDimensions().height * 1.5,
        }}
        locations={[0, 0.99]}
        colors={gradientColor}
      />
      <SafeAreaInsetsView className="absolute w-full h-full">
        <TopNav
          title="Home"
          left={
            <TouchableOpacity
              onPress={() => console.log("clicked")}
              className="pl-5"
            >
              {getIcon("Success", 32, 32, "green")}
            </TouchableOpacity>
          }
          right={
            <TouchableOpacity
              onPress={() => navigation.navigate("settings")}
              className="pr-5"
            >
              {getIcon(
                "Settings",
                32,
                32,
                colorScheme === "dark" ? "#FFFFFF" : "#000000",
              )}
            </TouchableOpacity>
          }
          onRightPress={() => console.log(expenseCategories)}
          titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        />
        <Text className="relative text-xl text-s_light-20 text-center pt-4">
          Left to spend in January
        </Text>
        <Text className="text-s_green-100 relative text-6xl font-semibold text-center pt-4">
          {formatCurrency((totalBudget - budgetedSpend) / 100)}
        </Text>
        <ScrollView style={{ flex: 1 }}>
          <CashflowCard
            spendingNumber={expenseSum / 100}
            incomeNumber={incomeSum / 100}
            expenseAmount={amountByExpenseCategory}
            expenseColor={expenseCategories.map((i) => i.color)}
            expenseTitle={expenseCategories.map((i) => i.title)}
            incomeAmount={amountByIncomeCategory}
            incomeColor={incomeCategories.map((i) => i.color)}
            incomeTitle={incomeCategories.map((i) => i.title)}
          />
          <NetWorthCard netWorth={100000} />
        </ScrollView>
      </SafeAreaInsetsView>
    </View>
  );
};
