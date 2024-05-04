import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { useObject, useQuery } from "@realm/react";
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
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import CashflowCard from "../components/Card/CashflowCard";
import RecommendationCard from "../components/Card/RecommendationCard";
import WealthCard from "../components/Card/WealthCard";
import { TopNav } from "../components/Navigation/TopNav";
import { FetchUpdate } from "../libs/FetchUpdate";
import { Asset } from "../models/Asset";
import { Category } from "../models/Category";
import { Currency } from "../models/Currency";
import { Transaction } from "../models/Transaction";
import { mainCurrency } from "../utils/Config";
import { getCurrentMonth } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";
import { createRecommendations } from "../utils/recommenderLogic";

const fetchRecommendations = async () => {
  try {
    return await createRecommendations();
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
};

export const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [netWorth, setNetWorth] = React.useState(0);
  const allTransactions = useQuery(Transaction);
  const categories = useQuery(Category, (collection) => {
    return collection.filtered("title != $0", "Uncategorized");
  });
  const assets = useQuery(Asset);
  const expenseCategories: Realm.Results<Category> = categories.filtered(
    "isExpense == $0",
    true,
  );
  const incomeCategories: Realm.Results<Category> = categories.filtered(
    "isExpense == $0",
    false,
  );
  const budgetedCategories: Realm.Results<Category> =
    expenseCategories.filtered("hasBudget == $0", true);
  const colorScheme = useColorScheme();
  const [recommendations, setRecommendations] = React.useState([]);

  const amountByExpenseCategory: number[] = new Array(
    expenseCategories.length,
  ).fill(0);

  for (let i = 0; i < expenseCategories.length; i++) {
    amountByExpenseCategory[i] = expenseCategories[i].calculateTotals();
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
      i.linkingObjects<Transaction>("Transaction", "category").forEach(
        (trans) => {
          budgetedSpend += trans.amount;
        },
      );
    });
  }

  const amountByIncomeCategory: number[] = new Array(
    incomeCategories.length,
  ).fill(0);
  for (let i = 0; i < incomeCategories.length; i++) {
    amountByIncomeCategory[i] = incomeCategories[i].calculateTotals();
  }
  const incomeSum = amountByIncomeCategory.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0,
  );

  React.useEffect(() => {
    let totalAmount = allTransactions.reduce((acc, trans) => {
      return (
        acc +
        trans.currency.getAmount(trans.amountInBaseCurrency) *
          (trans.isExpense ? -1 : 1)
      );
    }, 0);
    assets.forEach((asset) => {
      totalAmount += asset.curPrice.quote * asset.unitsOwned;
    });
    setNetWorth(totalAmount);
  }, [assets]);

  useFocusEffect(
    React.useCallback(() => {
      const getRecommendations = async () => {
        const result = await fetchRecommendations();
        setRecommendations(result);
        console.log(recommendations);
      };
      getRecommendations();
    }, []),
  );

  let gradientColor = ["rgb(255, 246, 229)", "rgb(248, 237, 216)"];

  if (colorScheme === "dark") {
    gradientColor = ["rgb(0, 11, 21)", "rgb(0, 0, 0)"];
  }

  const [loading, setLoading] = React.useState(false);
  const baseCurrency = useObject(Currency, mainCurrency);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      await FetchUpdate();
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false);
  };

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
          title={loading ? "Fetching Updates" : "Home"}
          left={
            <TouchableOpacity onPress={handleFetchData} className="pl-5">
              <IconGlyph
                glyph={loading ? "Globe" : "Success"}
                dim={32}
                fill={
                  loading ? ThemeColor.s_blue["100"] : ThemeColor.s_green["100"]
                }
              />
            </TouchableOpacity>
          }
          right={
            <TouchableOpacity
              onPress={() => navigation.navigate("settings")}
              className="pr-5"
            >
              <IconGlyph
                glyph="Settings"
                dim={32}
                fill={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
              />
            </TouchableOpacity>
          }
          titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        />
        {budgetedCategories.length === 0 && (
          <Text className="relative text-xl text-s_light-20 text-center pt-4">
            No Budget Configured
          </Text>
        )}
        {budgetedCategories.length !== 0 && (
          <>
            <Text className="relative text-xl text-s_light-20 text-center pt-4">
              Left to spend in {getCurrentMonth()}
            </Text>
            <Text
              className={`${totalBudget - budgetedSpend >= 0 ? "text-s_green-100" : "text-s_red-100"} relative text-6xl font-semibold text-center pt-4`}
            >
              {baseCurrency.symbol}
              {baseCurrency.getAmountString(totalBudget - budgetedSpend)}
            </Text>
          </>
        )}
        <ScrollView style={{ flex: 1 }}>
          <CashflowCard
            expenseTotal={expenseSum / 100}
            incomeTotal={incomeSum / 100}
            expenseAmount={amountByExpenseCategory}
            expenseColor={expenseCategories.map((i) => i.color)}
            expenseTitle={expenseCategories.map((i) => i.title)}
            incomeAmount={amountByIncomeCategory}
            incomeColor={incomeCategories.map((i) => i.color)}
            incomeTitle={incomeCategories.map((i) => i.title)}
          />
          <WealthCard
            netWorth={netWorth}
            onClick={() => navigation.navigate("net wealth stack")}
          />
          {recommendations.length > 0 && (
            <View className="mx-5 items-center mt-4">
              <Text className="font-medium text-4xl text-s_dark-100 dark:text-s_light-100 mb-4">
                Insights
              </Text>
            </View>
          )}
          {recommendations.map((rec, index) => (
            <RecommendationCard
              key={index}
              title={rec.title}
              description={rec.description}
            />
          ))}
          <View className="h-28" />
        </ScrollView>
      </SafeAreaInsetsView>
    </View>
  );
};
