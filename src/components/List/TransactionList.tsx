import * as React from "react";
import { View, Text } from "react-native";

import TransactionCard from "../Card/TransactionCard";

export const TransactionList = () => {
  return (
    <View>
      <Text className="text-3xl pl-8 mt-3">Today</Text>
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <Text className="text-3xl pl-8 mt-3">Yesterday</Text>
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
      <TransactionCard
        transactionTitle="Target"
        transactionAmount={-120}
        transactionTime={1710614000}
        categoryTitle="Grocery"
        categoryColorR={238}
        categoryColorG={165}
        categoryColorB={25}
      />
    </View>
  );
};

export default TransactionList;
