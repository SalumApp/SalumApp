// @ts-nocheck
import "react-native-get-random-values";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useObject, useRealm } from "@realm/react";
import * as React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import { IconGlyph } from "../assets/Glyph";
import { TopNav } from "../components/Navigation/TopNav";
import BottomSheetConfirmation from "../components/Sheet/BottomSheetConfirmation";
import { Transaction } from "../models/Transaction";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

export const DetailedTransaction = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const realm = useRealm();
  const { transactionId } = route.params;
  const transaction = useObject(Transaction, transactionId);
  const colorScheme = useColorScheme();
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    React.useState(false);

  if (!transaction) {
    return <Text>No transactions found</Text>;
  }

  let bg_color: string;

  if (transaction.isExpense) {
    if (colorScheme === "dark") {
      bg_color = ThemeColor.s_red.dark;
    } else {
      bg_color = ThemeColor.s_red["100"];
    }
  } else {
    if (colorScheme === "dark") {
      bg_color = ThemeColor.s_green.dark;
    } else {
      bg_color = ThemeColor.s_green["100"];
    }
  }

  const handleTransactionDelete = () => {
    realm.write(() => {
      setIsDeleteConfirmationVisible(false);
      realm.delete(transaction);
      navigation.navigate("transaction");
    });
  };

  return (
    <SafeAreaInsetsView
      topInsetColor={bg_color}
      className="flex-1 dark:bg-s_dark-100"
    >
      <TopNav
        title="Transaction Detail"
        titleColor="#FFFFFF"
        bgColor={bg_color}
        onLeftPress={() => navigation.navigate("transaction")}
        right={
          <TouchableOpacity
            onPress={() => setIsDeleteConfirmationVisible(true)}
            className="pr-5"
          >
            <IconGlyph glyph="Trash" dim={32} fill="#FFFFFF" />
          </TouchableOpacity>
        }
      />
      <View
        style={{ backgroundColor: bg_color }}
        className="h-1/3 w-full top-0 rounded-b-3xl items-center justify-center"
      >
        <View className="flex-row items-center pb-2 mt-10">
          <Text className="text-7xl font-medium text-s_light-80">
            {transaction.currency.symbol}
            {transaction.currency.getAmountString(transaction.amount)}
          </Text>
        </View>
        <Text className="text-2xl font-medium text-s_light-80">
          {transaction.title}
        </Text>
        <Text className="text-xl font-medium text-s_light-80">
          {transaction.datetime.toLocaleString()}
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
            className="font-medium text-2xl color-s_dark-100 dark:text-s_light-80"
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
            className="font-medium text-2xl color-s_dark-100 dark:text-s_light-80"
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
            <Text className="self-centerfont-medium text-2xl color-s_dark-100 dark:text-s_light-80">
              {transaction.description}
            </Text>
          </View>
        )}
        {transaction.attachments !== null && (
          <View className="">
            <Text className="font-medium text-xl color-s_light-20 m-5">
              Attachment
            </Text>
            <Image
              source={{
                uri: transaction.attachments,
              }}
              style={{ resizeMode: "contain", width: "90%", height: "80%" }}
              className="self-center"
            />
          </View>
        )}
      </ScrollView>
      <BottomSheetConfirmation
        visible={isDeleteConfirmationVisible}
        onClose={() => setIsDeleteConfirmationVisible(false)}
        title="Remove this transaction?"
        description="Are you sure do you want to remove this transaction?"
        onPressLeft={() => setIsDeleteConfirmationVisible(false)}
        onPressRight={handleTransactionDelete}
      />
    </SafeAreaInsetsView>
  );
};
