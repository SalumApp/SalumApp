import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import { getIcon } from "../../utils/GlyphProvider";
import {
  addAlpha,
  formatCurrency,
  getCurrentMonth,
  getRemainingDaysInMonth,
} from "../../utils/Misc";
import { ThemeColor } from "../../utils/Theme";

interface NetWorthCardProps {
  netWorth: number;
}

const NetWorthCard = ({ netWorth = 0 }: NetWorthCardProps) => {
  const sign = netWorth >= 0 ? "+" : "";
  const day_or_days = getRemainingDaysInMonth() === 1 ? "Day" : "Days";
  const balanceColor = netWorth >= 0 ? "color-s_green-100" : "color-s_red-100";
  const iconColor = ThemeColor.s_blue["100"];

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
    <View className="m-5 mt-4t bg-white rounded-3xl dark:bg-s_dark_navy-75">
      {/* Top card frame */}
      <TouchableOpacity className="flex-row pt-5 pl-6">
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(iconColor, 0.2) }}
        >
          {getIcon("Salary", 52, 52, iconColor)}
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-2xl pt-1.5 font-medium dark:text-s_light-100">
            Net Worth
          </Text>
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
          endOpacity={0}
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
