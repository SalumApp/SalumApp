import React from "react";
import { View, Text } from "react-native";

import TransactionSvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/transaction.svg";

interface CashflowCardProps {
  spendingBalance: number;
}

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
  const remainingDays = lastDayOfMonth.getDate() - currentDate.getDate();

  return remainingDays;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const CashflowCard = ({ spendingBalance }: CashflowCardProps) => {
  const balanceColorClass =
    spendingBalance >= 0 ? "color-emerald-500" : "color-red-500";
  const iconColorClass = spendingBalance >= 0 ? "#00A86B" : "#FD3C4A";
  const balanceColorClassLight =
    spendingBalance >= 0 ? "bg-emerald-100" : "bg-red-100";
  const formattedBalance = formatCurrency(spendingBalance);
  const day_or_days = getRemainingDaysInMonth() === 1 ? "Day" : "Days";
  const sign = spendingBalance >= 0 ? "+" : "";

  return (
    <View className="m-4 mt-3 pl-6 bg-white rounded-3xl shadow">
      {/* Top card frame */}
      <View className="flex-row pt-2.5">
        <View
          className={`${balanceColorClassLight} rounded-3xl w-20 h-20 flex justify-center items-center`}
        >
          <TransactionSvg width={52} height={52} fill={iconColorClass} />
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-2xl pt-1.5 font-medium">Cashflow</Text>
          <Text className="text-xl pt-3 color-gray-500">
            {getCurrentMonth()}
          </Text>
        </View>
        <View className="pt-1.5 flex-col ml-auto pr-6">
          <Text className={`${balanceColorClass} text-2xl font-medium ml-auto`}>
            {sign}
            {formattedBalance}
          </Text>
          <Text className="text-xl pt-3 color-gray-500 ml-auto">
            {getRemainingDaysInMonth()} {day_or_days} Left
          </Text>
        </View>
      </View>

      {/* Middle card frame */}
      <View className="flex-row pb-2.5">
        <View
          className="h-full bg-black mx-4 my-4"
          style={{ width: 1.5, height: 110 }}
        />
        <View className="flex-col">
          <View />
          <View />
        </View>
      </View>
    </View>
  );
};

export default CashflowCard;
