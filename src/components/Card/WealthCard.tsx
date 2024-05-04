import { useObject } from "@realm/react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { Currency } from "../../models/Currency";
import { mainCurrency } from "../../utils/Config";
import { addAlpha } from "../../utils/Misc";
import { ThemeColor } from "../../utils/Theme";
import { InvestmentChart } from "../Graph/InvestmentChart";

interface WealthCardProps {
  netWorth: number;
  onClick: () => void;
}

const WealthCard = ({ netWorth = 0, onClick }: WealthCardProps) => {
  const balanceColor = netWorth >= 0 ? "color-s_green-100" : "color-s_red-100";
  const iconColor = ThemeColor.s_blue["100"];
  const baseCurrency = useObject(Currency, mainCurrency);

  return (
    <View className="m-5 mt-4t bg-white rounded-3xl dark:bg-s_dark_navy-75 overflow-hidden">
      {/* Top card frame */}
      <TouchableOpacity className="flex-row pt-5 pl-6" onPress={onClick}>
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(iconColor, 0.2) }}
        >
          <IconGlyph glyph="Salary" dim={52} fill={iconColor} />
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-2xl pt-1.5 font-medium dark:text-s_light-100">
            Wealth
          </Text>
        </View>
        <View className="pt-1.5 flex-col ml-auto pr-6">
          <Text className={`${balanceColor} text-2xl font-medium ml-auto`}>
            {baseCurrency.symbol}
            {baseCurrency.getAmountString(netWorth, 5, false)}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Middle card frame */}
      <View className="mt-5 -mb-12">
        <InvestmentChart chartDate={30} />
      </View>
    </View>
  );
};

export default WealthCard;
