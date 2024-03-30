import * as React from "react";
import { View, Text } from "react-native";

import TransactionCard from "../Card/TransactionCard";
import { Transaction, getTransactionList } from "../../types/Transaction";
import { Category, getCategoryById } from "../../types/Category";

export const TransactionList = () => {

    const transactions = getTransactionList();

    return (
    <View>
        {transactions.map((transaction) => {
            const categoryDetail = getCategoryById(transaction.categoryId);
            return (
                <TransactionCard
                    key={transaction.id}
                    transactionTitle={transaction.title}
                    transactionAmount={transaction.amount}
                    transactionTime={transaction.datetime}
                    categoryTitle={categoryDetail.title}
                    categoryColor={categoryDetail.color}
                />
            );
        })}
    </View>
  );
};

export default TransactionList;
