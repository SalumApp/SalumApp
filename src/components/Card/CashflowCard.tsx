import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph/IconGlyph";
import {
  addAlpha,
  formatCurrency,
  getCurrentMonth,
  getRemainingDaysInMonth,
} from "../../utils/Misc";
import { ThemeColor } from "../../utils/Theme";
import SpendingBar from "../Graph/SpendingBar";

interface CashflowCardProps {
  spendingNumber: number;
  incomeNumber: number;
  expenseAmount: number[];
  expenseColor: string[];
  expenseTitle: string[];
  incomeAmount: number[];
  incomeColor: string[];
  incomeTitle: string[];
}

const CashflowCard: React.FC<CashflowCardProps> = ({
  spendingNumber = 0,
  incomeNumber = 0,
  expenseAmount = [500, 500, 1000],
  expenseColor = ["orange", "purple", "red"],
  expenseTitle = ["Shopping", "Recurring", "Dining"],
  incomeAmount = [1000, 1000],
  incomeColor = ["green", "black"],
  incomeTitle = ["Salary", "Passive"],
}) => {
  const spendingBalance = incomeNumber - spendingNumber;
  const isPositiveBalance = spendingBalance >= 0;

  const balanceColor = isPositiveBalance
    ? "text-s_green-100"
    : "text-s_red-100";
  const iconColor = isPositiveBalance
    ? ThemeColor.s_green["100"]
    : ThemeColor.s_red["100"];

  const formattedBalance = formatCurrency(spendingBalance);
  const remainingDays = getRemainingDaysInMonth();
  const dayOrDays = remainingDays === 1 ? "Day" : "Days";
  const sign = isPositiveBalance ? "+" : "";

  return (
    <TouchableOpacity className="m-5 mt-4 pl-6 bg-white rounded-3xl dark:bg-s_dark_navy-75">
      <View className="flex-row pt-5">
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(iconColor, 0.2) }}
        >
          <IconGlyph glyph="Transaction" dim={52} fill={iconColor} />
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-2xl pt-1.5 font-medium dark:text-s_light-100">
            Cashflow
          </Text>
          <Text className="text-xl pt-3 color-gray-500">
            {getCurrentMonth()}
          </Text>
        </View>
        <View className="pt-1.5 flex-col ml-auto pr-6">
          <Text className={`${balanceColor} text-2xl font-medium ml-auto`}>
            {sign}
            {formattedBalance}
          </Text>
          <Text className="text-xl pt-3 color-gray-500 ml-auto">
            {remainingDays} {dayOrDays} Left
          </Text>
        </View>
      </View>

      {/* Middle card frame */}
      <View className="flex-row pb-2.5 mr-3">
        <View
          className="h-full bg-black dark:bg-s_light-40 ml-4 my-4"
          style={{ width: 1.69, height: 125 }}
        />
        <View className="flex-col mt-1">
          <View className="pt-2.5">
            <SpendingBar
              titleString="Expenses"
              moneyColor="text-red-500"
              categoriesSpendingAmount={expenseAmount}
              colorsSpendingCategory={expenseColor}
              totalBarWidth={250}
              categoriesNames={expenseTitle}
            />
          </View>
          <View className="pt-1.5">
            <SpendingBar
              titleString="Income"
              moneyColor="text-emerald-500"
              categoriesSpendingAmount={incomeAmount}
              colorsSpendingCategory={incomeColor}
              totalBarWidth={300}
              categoriesNames={incomeTitle}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CashflowCard;
