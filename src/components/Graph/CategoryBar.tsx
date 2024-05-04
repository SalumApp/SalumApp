// CategoryBar.tsx
import React from "react";
import { Text, View } from "react-native";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

interface CategoryBarProps {
  categoryName: string;
  categoryColor: string;
  categorySpendingAmount: number;
  totalSpendingAmount: number;
  totalBarWidth: number;
}

export const CategoryBar = ({
  categoryName,
  categoryColor,
  categorySpendingAmount,
  totalSpendingAmount,
  totalBarWidth,
}: CategoryBarProps) => {
  const categoryWidth =
    totalSpendingAmount !== 0
      ? (categorySpendingAmount / totalSpendingAmount) * totalBarWidth
      : 0;

  return (
    <View>
      <View className="flex-row items-center mb-2">
        <View
          className="w-5 h-5 rounded-full mr-2 self-center"
          style={{ backgroundColor: categoryColor }}
        />
        <Text className="text-2xl self-center font-medium dark:text-s_light-40">
          {categoryName}
        </Text>
      </View>
      <View
        className="h-5 rounded-full"
        style={{
          backgroundColor: categoryColor,
          width: categoryWidth,
        }}
      />
      <Text className="text-2xl font-medium mt-1 mb-3 dark:text-s_light-40">
        {formatCurrency(categorySpendingAmount / 100)}
      </Text>
    </View>
  );
};
