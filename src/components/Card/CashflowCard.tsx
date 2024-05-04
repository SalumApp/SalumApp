import { useObject } from "@realm/react";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { Currency } from "../../models/Currency";
import { mainCurrency } from "../../utils/Config";
import {
  addAlpha,
  getCurrentMonth,
  getRemainingDaysInMonth,
} from "../../utils/Misc";
import { ThemeColor } from "../../utils/Theme";
import SpendingBar from "../Graph/SpendingBar";

interface CashflowCardProps {
  expenseTotal: number;
  incomeTotal: number;
  expenseAmount: number[];
  expenseColor: string[];
  expenseTitle: string[];
  incomeAmount: number[];
  incomeColor: string[];
  incomeTitle: string[];
}

const CashflowCard: React.FC<CashflowCardProps> = ({
  expenseTotal = 0,
  incomeTotal = 0,
  expenseAmount = [500, 500, 1000],
  expenseColor = ["orange", "purple", "red"],
  expenseTitle = ["Shopping", "Recurring", "Dining"],
  incomeAmount = [1000, 1000],
  incomeColor = ["green", "black"],
  incomeTitle = ["Salary", "Passive"],
}) => {
  const baseCurrency = useObject(Currency, mainCurrency);
  const spendingBalance = incomeTotal - expenseTotal;

  const balanceColor =
    spendingBalance >= 0 ? "text-s_green-100" : "text-s_red-100";
  const iconColor =
    spendingBalance >= 0 ? ThemeColor.s_green["100"] : ThemeColor.s_red["100"];

  const remainingDays = getRemainingDaysInMonth();

  const [incomeWidth, setIncomeWidth] = useState(0);
  const [expenseWidth, setExpenseWidth] = useState(0);

  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    if (incomeTotal > expenseTotal) {
      setIncomeWidth(width * 0.9);
      setExpenseWidth(
        Math.max(0.4 * width, ((width * expenseTotal) / incomeTotal) * 0.9),
      );
    } else {
      setExpenseWidth(width * 0.9);
      setIncomeWidth(
        Math.max(0.4 * width, ((width * incomeTotal) / expenseTotal) * 0.9),
      );
    }
  };

  return (
    <View className="m-5 mt-4 pl-6 bg-white rounded-3xl dark:bg-s_dark_navy-75">
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
            {spendingBalance >= 0 ? "+" : "-"}
            {baseCurrency.symbol}
            {baseCurrency.getAmountString(
              Math.abs(spendingBalance),
              undefined,
              false,
            )}
          </Text>
          <Text className="text-xl pt-3 color-gray-500 ml-auto">
            {remainingDays} {remainingDays === 1 ? "Day" : "Days"} Left
          </Text>
        </View>
      </View>

      {/* Middle card frame */}
      {incomeTotal > 0 && expenseTotal > 0 && (
        <View onLayout={handleLayout} className="flex-row pb-2.5 pr-3">
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
                totalBarWidth={expenseWidth}
                categoriesNames={expenseTitle}
              />
            </View>
            <View className="pt-1.5">
              <SpendingBar
                titleString="Income"
                moneyColor="text-emerald-500"
                categoriesSpendingAmount={incomeAmount}
                colorsSpendingCategory={incomeColor}
                totalBarWidth={incomeWidth}
                categoriesNames={incomeTitle}
              />
            </View>
          </View>
        </View>
      )}
      {(incomeTotal <= 0 || expenseTotal <= 0) && (
        <Text className="text-xl dark:text-s_light-80 self-center py-6 pr-4">
          No Data
        </Text>
      )}
    </View>
  );
};

export default CashflowCard;
