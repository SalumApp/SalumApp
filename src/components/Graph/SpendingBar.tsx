import React from "react";
import { Text, View } from "react-native";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

interface SpendingBarProps {
  titleString: string;
  moneyColor: string;
  categoriesSpendingAmount: number[];
  colorsSpendingCategory: string[];
  totalBarWidth: number; // New prop for adjustable total width
  categoriesNames: string[]; // New prop for category names
}

export const SpendingBar = ({
  titleString = "Expenses",
  moneyColor = "text-red-500",
  categoriesSpendingAmount = [4, 6, 7],
  colorsSpendingCategory = ["orange", "purple", "red"],
  totalBarWidth = 300, // Default width of the bar
  categoriesNames = ["Shopping", "Recurring", "Dining"],
}: SpendingBarProps) => {
  const totalSpending =
    categoriesSpendingAmount.reduce((acc, amount) => acc + amount, 0) / 100;
  let count = 1;

  return (
    <View className="flex-col">
      <View className="flex-row">
        <Text className="pl-1 pt-0.5 text-xl font-medium dark:text-s_light-40 pb-0.5">
          {titleString}
        </Text>
        <Text
          className={`text-xl ml-auto mr-2 font-medium ${moneyColor} pb-0.5`}
        >
          {formatCurrency(totalSpending)}
        </Text>
      </View>
      <View className="flex-row" style={{ width: totalBarWidth }}>
        {categoriesSpendingAmount.map((amount, index) => {
          if (amount !== 0) {
            const isLastIndex =
              count ===
              categoriesSpendingAmount.filter((element) => element !== 0)
                .length;
            // Calculate the width of each segment as a percentage
            const width_bar_temp = Math.ceil(
              (amount / 100 / totalSpending) * totalBarWidth,
            );
            count++;
            // Construct a dynamic style for the segment
            if (isLastIndex) {
              return (
                <View key={index.toString()}>
                  <View
                    className="rounded-r-3xl h-4 min-w-3"
                    style={{
                      backgroundColor: colorsSpendingCategory[index] || "grey",
                      width: width_bar_temp,
                    }}
                  />
                  <Text
                    className="font-medium text-base mt-0.5 -mb-2 pl-1"
                    style={{
                      color: "#91919F",
                      textAlign: "left",
                      width: width_bar_temp,
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {categoriesNames[index]}
                  </Text>
                </View>
              );
            } else {
              return (
                <View key={index.toString()}>
                  <View
                    className="h-4 min-w-1"
                    style={{
                      backgroundColor: colorsSpendingCategory[index] || "grey",
                      width: width_bar_temp,
                    }}
                  />
                  <Text
                    className="font-medium text-base mt-0.5 -mb-2 pl-1"
                    style={{
                      color: "#91919F",
                      textAlign: "left",
                      width: width_bar_temp,
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {categoriesNames[index]}
                  </Text>
                </View>
              );
            }
          }
        })}
      </View>
    </View>
  );
};

export default SpendingBar;
