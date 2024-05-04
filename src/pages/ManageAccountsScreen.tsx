import { NavigationProp, useNavigation } from "@react-navigation/native";
import "react-native-get-random-values";
import { useObject, useQuery } from "@realm/react";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import AccountCard from "../components/Card/AccountCard";
import { TopNav } from "../components/Navigation/TopNav";
import { Account } from "../models/Account";
import { Currency } from "../models/Currency";
import { mainCurrency } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const ManageAccountsScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const accounts = useQuery(Account);
  const titleColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const baseCurrency = useObject(Currency, mainCurrency);

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Accounts"
        titleColor={titleColor}
        left={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="pl-5"
          >
            <IconGlyph glyph="Arrow-left" dim={32} fill={titleColor} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("account detail", {
                accountId: new Realm.BSON.UUID(),
              })
            }
            className="pl-1 pr-5"
          >
            <IconGlyph glyph="Plus" dim={24} fill={titleColor} />
          </TouchableOpacity>
        }
      />
      <View className="items-center mt-4">
        <Text className="font-medium text-xl text-s_light-20">
          Total Accounts Balance
        </Text>
      </View>
      <View className="items-center mt-4 mb-3">
        <Text className="font-medium text-6xl text-s_dark-100 dark:text-s_light-80">
          {baseCurrency.symbol}
          {baseCurrency.getAmountString(
            accounts.reduce(
              (sum, acc) =>
                sum +
                Math.round(
                  baseCurrency.getAmountInBaseUnits(
                    acc.currency.convertToFcy(
                      baseCurrency,
                      acc.currency.getAmount(acc.getBalance()),
                    ),
                  ),
                ),
              0,
            ),
          )}
        </Text>
      </View>
      <ScrollView>
        {accounts.map((account) => (
          <AccountCard
            key={account._id.toString()}
            account={account}
            onPress={() =>
              navigation.navigate("account detail", {
                accountId: account._id,
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaInsetsView>
  );
};
