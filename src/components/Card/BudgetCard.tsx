import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import WarningSVG from "../../assets/GlyphProvider/glyph/User Interface/Glyph/warning.svg";
import { formatCurrency } from "../../utils/Misc";

interface BudgetCardProps {
  totalAmount: number;
  usedAmount: number;
  categoryTitle: string;
  categoryColor: string;
  currency: string;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  totalAmount = 100,
  usedAmount = 120,
  categoryTitle = "Grocery",
  categoryColor = "rgb(238, 165, 25)",
  currency = "USD",
}) => {
  let remainingAmount = totalAmount - usedAmount;
  if (remainingAmount < 0) {
    remainingAmount = 0;
  }

  return (
    <TouchableOpacity className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 border border-s_light-40 dark:bg-s_dark-75">
      <View className="flex-col pt-3 pb-3 justify-between">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center max-w-[60%] bg-s_light-80 dark:bg-s_dark-75 border border-gray-300 rounded-3xl">
            <View
              className="h-5 w-5 rounded-full items-center self-center ml-3 mr-2 my-3"
              style={{ backgroundColor: categoryColor }}
            />
            <View className="max-w-[85%]">
              <Text
                className="items-center self-center text-xl font-medium mr-4 dark:text-s_light-80"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {categoryTitle}
              </Text>
            </View>
          </View>
          {remainingAmount === 0 && (
            <View className="mr-4">
              <WarningSVG fill="#FD3C4A" height={28} width={28} />
            </View>
          )}
        </View>
        <View className="mt-2">
          <Text className="text-3xl font-medium dark:text-s_light-80">
            {formatCurrency(remainingAmount, currency)} Remaining
          </Text>
        </View>
        <View className="mt-2">
          <Text className="text-xl font-medium color-s_light-20">
            Used {formatCurrency(usedAmount, currency)} of{" "}
            {formatCurrency(totalAmount, currency)}
          </Text>
        </View>
        <View className="mt-2">
          {remainingAmount === 0 && (
            <View>
              <Text className="text-lg color-s_red-100">
                You’ve exceed the limit!
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BudgetCard;
