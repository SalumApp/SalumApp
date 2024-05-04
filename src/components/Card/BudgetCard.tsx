import { useObject, useRealm } from "@realm/react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { Category } from "../../models/Category";
import { Currency } from "../../models/Currency";
import { Transaction } from "../../models/Transaction";
import { mainCurrency } from "../../utils/Config";
import BottomSheetConfirmation from "../Sheet/BottomSheetConfirmation";

interface BudgetCardProps {
  category: Category;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ category }) => {
  let usedAmount = 0;
  const defaultCurrency = useObject(Currency, mainCurrency);

  category
    .linkingObjects<Transaction>("Transaction", "category")
    .forEach((trans) => {
      usedAmount += trans.amount;
    });

  let remainingAmount = category.budget - usedAmount;
  if (remainingAmount < 0) {
    remainingAmount = 0;
  }

  const realm = useRealm();
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    React.useState(false);

  return (
    <>
      <TouchableOpacity
        className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 border border-s_light-40 dark:bg-s_dark-75"
        onPress={() => setIsDeleteConfirmationVisible(true)}
      >
        <View className="flex-col pt-3 pb-3 justify-between">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center max-w-[60%] bg-s_light-80 dark:bg-s_dark-75 border border-gray-300 rounded-3xl">
              <View
                className="h-5 w-5 rounded-full items-center self-center ml-3 mr-2 my-3"
                style={{ backgroundColor: category.color }}
              />
              <View className="max-w-[85%]">
                <Text
                  className="items-center self-center text-xl font-medium mr-4 dark:text-s_light-80"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category.title}
                </Text>
              </View>
            </View>
            {remainingAmount === 0 && (
              <View className="mr-4">
                <IconGlyph glyph="Warning" dim={28} fill="#FD3C4A" />
              </View>
            )}
          </View>
          <View className="mt-2">
            <Text className="text-3xl font-medium dark:text-s_light-80">
              {defaultCurrency.symbol}
              {defaultCurrency.getAmountString(remainingAmount)} Remaining
            </Text>
          </View>
          <View className="mt-2">
            <Text className="text-xl font-medium color-s_light-20">
              Used {defaultCurrency.symbol}
              {defaultCurrency.getAmountString(usedAmount)} of{" "}
              {defaultCurrency.symbol}
              {defaultCurrency.getAmountString(category.budget)}
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
      <BottomSheetConfirmation
        visible={isDeleteConfirmationVisible}
        onClose={() => setIsDeleteConfirmationVisible(false)}
        title="Remove this budget?"
        description="Are you sure do you want to remove this budget?"
        onPressLeft={() => setIsDeleteConfirmationVisible(false)}
        onPressRight={() => {
          realm.write(() => {
            setIsDeleteConfirmationVisible(false);
            category.hasBudget = false;
          });
        }}
      />
    </>
  );
};

export default BudgetCard;
