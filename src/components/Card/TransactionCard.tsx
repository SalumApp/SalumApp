import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { getIcon } from "../../utils/GlyphProvider";
import { addAlpha, formatCurrency, formatTime } from "../../utils/Misc";

interface TransactionCardProps {
  transactionTitle: string;
  transactionAmount: number;
  transactionTime: number;
  categoryTitle: string;
  categoryGlyph: string;
  categoryColor: string;
  onPress: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  transactionTitle = "Target Run",
  transactionAmount = -89.64,
  transactionTime = 1710614000,
  categoryTitle = "Grocery",
  categoryGlyph = "More",
  categoryColor = "rgb(238, 165, 25)",
  onPress,
}) => {
  const amountTextColor =
    transactionAmount >= 0 ? "text-s_green" : "text-s_red";
  const iconBg = addAlpha(categoryColor, 0.2);

  const formattedAmount = formatCurrency(transactionAmount);
  const sign = transactionAmount >= 0 ? "+" : "";

  return (
    <TouchableOpacity
      className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80"
      onPress={onPress}
    >
      <View className="flex-row pt-3 pb-3">
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: iconBg }}
        >
          {getIcon(categoryGlyph, 52, 52, categoryColor)}
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-xl pt-1.5 font-medium">{transactionTitle}</Text>
          <Text className="pt-5 color-gray-500">{categoryTitle}</Text>
        </View>
        <View className="pt-1.5 flex-col ml-auto pr-6">
          <Text className={`text-xl font-medium ml-auto ${amountTextColor}`}>
            {sign}
            {formattedAmount}
          </Text>
          <Text className="pt-5 color-gray-500 ml-auto">
            {formatTime(transactionTime)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
