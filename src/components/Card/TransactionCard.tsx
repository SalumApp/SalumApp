import { useObject } from "@realm/react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { Currency } from "../../models/Currency";
import { Transaction } from "../../models/Transaction";
import { mainCurrency } from "../../utils/Config";
import { addAlpha } from "../../utils/Misc";

interface TransactionCardProps {
  transaction: Transaction;
  onPress: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
  onPress,
}) => {
  const baseCurrency = useObject(Currency, mainCurrency);

  return (
    <TouchableOpacity
      className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75"
      onPress={onPress}
    >
      <View className="flex-row pt-3 pb-3">
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(transaction.category.color, 0.2) }}
        >
          <IconGlyph
            glyph={transaction.category.glyph}
            dim={52}
            fill={transaction.category.color}
          />
        </View>
        <View className="pl-4 flex-col">
          <Text className="text-xl pt-1.5 font-medium dark:text-s_light-80">
            {transaction.title}
          </Text>
          <Text className="pt-5 color-gray-500">
            {transaction.category.title}
          </Text>
        </View>
        <View className="pt-1.5 flex-col ml-auto pr-6">
          <View className="flex-row items-center">
            {transaction.currency.code !== baseCurrency.code && (
              <Text className="color-gray-500">
                {transaction.currency.symbol}
                {transaction.currency.getAmountString(transaction.amount)}
                {" ≈ "}
              </Text>
            )}
            <Text
              className={`text-xl font-medium text-right ${transaction.isExpense ? "text-s_red" : "text-s_green"}`}
            >
              {transaction.isExpense ? "-" : "+"}
              {baseCurrency.symbol}
              {baseCurrency.getAmountString(transaction.amountInBaseCurrency)}
            </Text>
          </View>
          <Text className="pt-5 color-gray-500 ml-auto">
            {transaction.datetime.toLocaleTimeString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
