import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import SalarySvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/salary.svg";

interface NetWorthCardProps {
  netWorth: number;
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

  return lastDayOfMonth.getDate() - currentDate.getDate();
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const NetWorthCard = ({ netWorth = 0 }: NetWorthCardProps) => {
  const iconMainColor = "rgb(0 119 255)";
  const iconLightColor = "bg-s_blue-20";
  const sign = netWorth >= 0 ? "+" : "";
  const day_or_days = getRemainingDaysInMonth() === 1 ? "Day" : "Days";
  const balanceColor = netWorth >= 0 ? "color-s_green-100" : "color-s_red-100";

  const lineData = [
    { value: 20 },
    { value: 40 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
  ];

  return (
    <View className="m-5 mt-4t bg-white rounded-3xl">
      {/* Top card frame */}
      <TouchableOpacity className="flex-row pt-5 pl-6">
        <View
          className={`${iconLightColor} rounded-3xl w-20 h-20 flex justify-center items-center`}
        >
          <SalarySvg width={52} height={52} fill={iconMainColor} />
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-2xl pt-1.5 font-medium">Net Worth</Text>
          <Text className="text-xl pt-3 color-s_light-20">
            {getCurrentMonth()}
          </Text>
        </View>
        <View className="pt-1.5 flex-col ml-auto pr-6">
          <Text className={`${balanceColor} text-2xl font-medium ml-auto`}>
            {sign}
            {formatCurrency(netWorth)}
          </Text>
          <Text className="text-xl pt-3 color-s_light-20 ml-auto">
            {getRemainingDaysInMonth()} {day_or_days} Left
          </Text>
        </View>
      </TouchableOpacity>

      {/* Middle card frame */}
      <View className="-ml-3">
        <LineChart
          areaChart
          hideDataPoints
          disableScroll
          startFillColor="#0077FF"
          startOpacity={1}
          endOpacity={0.3}
          initialSpacing={0}
          data={lineData}
          curved
          thickness={5}
          hideRules
          hideYAxisText
          yAxisColor="transparent"
          xAxisColor="transparent"
          color="#0077FF"
          adjustToWidth
        />
      </View>
    </View>
  );
};

export default NetWorthCard;
