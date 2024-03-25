import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import TransactionSvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/transaction.svg";
import SpendingBar from "../Graph/SpendingBar";

interface CashflowCardProps {
  spendingNumber: number;
  incomeNumber: number;
}

const CashflowCard: React.FC<CashflowCardProps> = ({
  spendingNumber = 0,
  incomeNumber = 0,
}) => {
  const spendingBalance = incomeNumber - spendingNumber;
  const isPositiveBalance = spendingBalance >= 0;

  const balanceColor = isPositiveBalance ? "text-emerald-500" : "text-red-500";
  const iconColor = isPositiveBalance ? "#00A86B" : "#FD3C4A";
  const balanceBackgroundColor = isPositiveBalance
    ? "bg-emerald-100"
    : "bg-red-100";

  const formattedBalance = formatCurrency(spendingBalance);
  const remainingDays = getRemainingDaysInMonth();
  const dayOrDays = remainingDays === 1 ? "Day" : "Days";
  const sign = isPositiveBalance ? "+" : "";

  return (
    <TouchableOpacity className="m-5 mt-4 pl-6 bg-white rounded-3xl">
      {/* Top card frame */}
      <View className="flex-row pt-5">
        <View
          className={`${balanceBackgroundColor} rounded-3xl w-20 h-20 flex justify-center items-center`}
        >
          <TransactionSvg width={52} height={52} fill={iconColor} />
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-2xl pt-1.5 font-medium">Cashflow</Text>
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
          className="h-full bg-black ml-4 my-4"
          style={{ width: 1.69, height: 125 }}
        />
        <View className="flex-col mt-1">
          <View className="pt-2.5">
            <SpendingBar
              titleString="Expenses"
              moneyColor="text-red-500"
              categoriesSpendingAmount={[500, 500, 1000]}
              colorsSpendingCategory={["orange", "purple", "red"]}
              totalBarWidth={250}
              categoriesNames={["Shopping", "Recurring", "Dining"]}
            />
          </View>
          <View className="pt-1.5">
            <SpendingBar
              titleString="Income"
              moneyColor="text-emerald-500"
              categoriesSpendingAmount={[1000, 1000]}
              colorsSpendingCategory={["green", "black"]}
              totalBarWidth={300}
              categoriesNames={["Salary", "Passive"]}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getCurrentMonth = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  return monthNames[currentDate.getMonth()];
};

const getRemainingDaysInMonth = () => {
  const currentDate = new Date();
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );
  return lastDayOfMonth.getDate() - currentDate.getDate();
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export default CashflowCard;
