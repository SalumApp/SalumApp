import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Currency } from "../../models/Currency";
import { addAlpha } from "../../utils/Misc";
import { ThemeColor } from "../../utils/Theme";

interface CurrencyCardProps {
  currency: Currency;
  onPress: () => void;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ currency, onPress }) => {
  return (
    <TouchableOpacity
      className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75"
      onPress={onPress}
    >
      <View className="flex-row pt-3 pb-3">
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(ThemeColor.s_blue["100"], 0.2) }}
        >
          <Text className="text-s_blue-100 text-3xl">{currency.symbol}</Text>
        </View>
        <View className="pt-1 pl-4 flex-col">
          <Text className="text-xl pt-1.5 font-medium dark:text-s_light-80">
            {currency.name}
          </Text>
          <Text className="pt-3 color-gray-500">
            1 {currency.code} = {currency.toUSD} USD
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CurrencyCard;
