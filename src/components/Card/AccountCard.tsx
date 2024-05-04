import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { Account } from "../../models/Account";

interface AccountCardProps {
  account: Account;
  onPress: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ account, onPress }) => {
  return (
    <TouchableOpacity
      className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75"
      onPress={onPress}
    >
      <View className="flex-row pt-3 pb-3 items-center">
        <View className="rounded-3xl w-20 h-20 flex justify-center items-center">
          <View
            className="absolute w-full h-full rounded-3xl"
            style={{ backgroundColor: account.color, opacity: 0.35 }}
          />
          <IconGlyph glyph={account.glyph} dim={52} fill={account.color} />
        </View>
        <View className="flex-1 pl-4">
          <Text
            className="text-xl font-medium dark:text-s_light-80"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {account.title}
          </Text>
          <Text className="pt-2 text-s_light-20 font-medium text-lg">
            {account.isCredit ? "Credit" : "Deposit"}
          </Text>
        </View>
        <View className="ml-auto pr-6">
          <Text className="text-2xl font-medium text-s_dark-100 dark:text-s_light-80">
            {account.currency.symbol}
            {account.currency.getAmountString(account.getBalance())}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountCard;
