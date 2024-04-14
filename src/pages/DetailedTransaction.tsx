// @ts-nocheck
import { useNavigation, useRoute } from "@react-navigation/native";
import { useObject } from "@realm/react";
import * as React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { TopNav } from "../components/Navigation/TopNav";
import { Transaction } from "../models/Transaction";
import { formatCurrency } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

export const DetailedTransaction = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { transactionId } = route.params;
  const transaction = useObject(Transaction, transactionId);

  let bg_color: string;
  if (transaction.isExpense) {
    bg_color = "bg-s_red-100";
  } else {
    bg_color = "bg-s_green-100";
  }

  return (
    <SafeAreaInsetsView
      topInsetColor={
        transaction.isExpense
          ? ThemeColor.s_red["100"]
          : ThemeColor.s_green["100"]
      }
    >
      <TopNav
        title="Transaction Detail"
        titleColor="#FFFFFF"
        bgColor={
          transaction.isExpense
            ? ThemeColor.s_red["100"]
            : ThemeColor.s_green["100"]
        }
        onLeftPress={() => navigation.navigate("transaction")}
        onRightPress={() => console.log("delete")}
      />
      <View
        className={`${bg_color} h-1/3 w-full top-0 rounded-b-3xl items-center justify-center`}
      >
        <View className="flex-row i${bg_color}tems-center pb-2 mt-10">
          <Text className="text-7xl font-medium text-s_light-80">
            {formatCurrency(transaction.amount / 100)}
          </Text>
        </View>
        <Text className="text-2xl font-medium text-s_light-80">
          {transaction.title}
        </Text>
        <Text className="text-xl font-medium text-s_light-80">
          {new Date(transaction.datetime).toLocaleString()}
        </Text>
      </View>

      <ScrollView>
        <View className="m-5">
          <Text
            className="font-medium text-xl color-s_light-20"
            numberOfLines={1}
          >
            Category
          </Text>
          <Text
            className="font-medium text-2xl color-s_dark-100"
            numberOfLines={1}
          >
            {transaction.category.title}
          </Text>
        </View>

        <View className="m-5">
          <Text
            className="font-medium text-xl color-s_light-20"
            numberOfLines={1}
          >
            Account
          </Text>
          <Text
            className="font-medium text-2xl color-s_dark-100"
            numberOfLines={1}
          >
            {transaction.account.title}
          </Text>
        </View>
        {transaction.description !== null && (
          <View className="m-5">
            <Text className="font-medium text-xl color-s_light-20">
              Description
            </Text>
            <Text className="self-centerfont-medium text-xl color-s_dark-100">
              {transaction.description}
            </Text>
          </View>
        )}
        {transaction.attachments !== null && (
          <View>
            <Text className="font-medium text-xl color-s_light-20 ml-8">
              Attachment
            </Text>
            <Image
              source={{
                uri: `data:image/png;base64,${transaction.attachments}`,
              }}
              style={{ resizeMode: "contain" }}
              className="w-11/12 self-center"
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaInsetsView>
  );
};
