import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery, useRealm } from "@realm/react";
import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";

import TransferForm from "../components/Form/TransferForm";
import { ExpenseNav } from "../components/Navigation/ExpenseNav";
import BottomSheet from "../components/Sheet/BottomSheet";
import { Account } from "../models/Account";
import { currencies } from "../utils/Config";
import { formatCentsToDollars } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const NewTransfer = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const realm = useRealm();

  const [key, setKey] = React.useState(0);

  const accounts = useQuery(Account);
  // TODO: alert to add one account before adding transaction if the length of accounts is zero
  // if (accounts.length === 0) {

  const [selectedFromAccount, setSelectedFromAccount] = React.useState(
    accounts[0],
  );
  const [selectedToAccount, setSelectedToAccount] = React.useState(accounts[0]);
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [amountInCents, setAmountInCents] = React.useState(0);

  const handleCurrencyPress = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setIsBottomSheetVisible(false);
  };

  const getCurrencySymbol = (currency: string) => {
    const supportedCurrencies = formatCurrency({ amount: 0, code: currency });
    return supportedCurrencies[2];
  };

  const handleAmountChange = (value: string) => {
    setAmountInCents(parseInt(value, 10));
  };

  const handleConfirmation = () => {
    realm.write(() => {
      selectedFromAccount.balance! -= amountInCents;
      selectedToAccount.balance! += amountInCents;
    });
    setKey((prevKey) => prevKey + 1);
    setAmountInCents(0);
    navigation.navigate("home");
  };

  return (
    <SafeAreaInsetsView
      key={key}
      className="flex-1 bg-s_yellow-100 dark:bg-s_yellow-dark"
    >
      <ExpenseNav
        title="New Transfer"
        titleColor="#FFFFFF"
        onLeftPress={() => navigation.navigate("home")}
      />
      <View className="w-full h-full">
        <View className="flex-1" />
        <View className="flex-row">
          <TouchableOpacity
            onPress={handleCurrencyPress}
            className="pl-4 mt-12"
          >
            <Text className="text-2xl rounded-lg w-20 pl-4 text-s_light-80 opacity-65">
              {selectedCurrency}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row items-center w-full">
          <Text className="text-white text-3xl pl-8 mr-1">
            {getCurrencySymbol(selectedCurrency)}
          </Text>
          <TextInput
            className="text-s_light-100 text-6xl m-1 pr-5 pt-3 flex-1"
            keyboardType="number-pad"
            textAlign="left"
            value={formatCentsToDollars(amountInCents)}
            onChangeText={(text) =>
              handleAmountChange(text.replace(/[^0-9]/g, ""))
            }
            placeholder="0.00"
            defaultValue="0.00"
          />
        </View>
        <TransferForm
          onConfirmation={handleConfirmation}
          accounts={accounts}
          onFromAccountChange={setSelectedFromAccount}
          onToAccountChange={setSelectedToAccount}
        />
      </View>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={currencies}
        onOptionSelect={handleCurrencySelect}
      />
    </SafeAreaInsetsView>
  );
};
