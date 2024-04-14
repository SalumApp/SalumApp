import "react-native-get-random-values";
import { useQuery } from "@realm/react";
import * as React from "react";
import { View } from "react-native";

import { Category } from "../../models/Category";
import { Transaction } from "../../models/Transaction";
import BudgetCard from "../Card/BudgetCard";

export const BudgetList = () => {
  // const categories = useQuery(Category);
  const categories = useQuery(Category, (allCategory) => {
    return allCategory.filtered(
      "isExpense == $0 && hasBudget == $1",
      true,
      true,
    );
  });
  return (
    <View>
      {categories.map((category) => {
        let usedAmount = 0;
        category
          .linkingObjects<Transaction>("Transaction", "category")
          .forEach((trans) => {
            usedAmount += trans.amount;
          });
        return (
          <BudgetCard
            key={category.title}
            totalAmount={category.budget / 100}
            usedAmount={usedAmount / 100}
            categoryTitle={category.title}
            categoryColor={category.color}
            currency="USD"
          />
        );
      })}
    </View>
  );
};

export default BudgetList;
