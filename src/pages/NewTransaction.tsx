import "react-native-get-random-values";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery, useRealm } from "@realm/react";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";
import Realm from "realm";

import TransactionForm from "../components/Form/TransactionForm";
import { ExpenseNav } from "../components/Navigation/ExpenseNav";
import BottomSheet from "../components/Sheet/BottomSheet";
import { Account } from "../models/Account";
import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";
import { currencies } from "../utils/Config";
import { formatCentsToDollars } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface NewTransactionProps {
  transactionType: string;
}

export const NewTransaction = ({ transactionType }: NewTransactionProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const realm = useRealm();

  const [key, setKey] = React.useState(0);

  const accounts = useQuery(Account);
  // TODO: alert to add one account before adding transaction if the length of accounts is zero
  // if (accounts.length === 0) {

  /* eslint-disable react-hooks/rules-of-hooks */
  let categories: Realm.Results<Category>;
  if (transactionType === "income") {
    categories = useQuery(Category, (collection) => {
      return collection.filtered("isExpense != $0", true);
    });
  } else {
    categories = useQuery(Category, (collection) => {
      return collection.filtered("isExpense != $0", false);
    });
  }
  /* eslint-enable react-hooks/rules-of-hooks */

  const [title, setTitle] = React.useState("");
  const [epochTime, setEpochTime] = React.useState(new Date().getTime());
  const [selectedAccount, setSelectedAccount] = React.useState(accounts[0]);
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [amountInCents, setAmountInCents] = React.useState(0);
  const [description, setDescription] = React.useState(null);
  const [attachment, setAttachment] = React.useState(null);
  const [isRecurring, setIsRecurring] = React.useState(false);
  const [selectedFreq, setSelectedFreq] = useState("Frequency");
  const [selectedEndDate, setSelectedEndDate] = useState<number | null>(null);

  // const handleAddTask = useCallback(
  //     (category: string, etime: number, cur_amount: string, cur_currency: string, cur_account: string, desp: string): void => {
  //       if (!category || !etime || !cur_amount || !cur_account || !cur_currency) {
  //         console.log("failed")
  //         console.log(category)
  //         console.log(etime)
  //         console.log(cur_amount)
  //         console.log(cur_account)
  //         return;
  //       }
  //
  //       // Everything in the function passed to "realm.write" is a transaction and will
  //       // hence succeed or fail together. A transcation is the smallest unit of transfer
  //       // in Realm, so we want to be mindful of how much we put into one single transaction
  //       // and split them up if appropriate (more commonly seen server side). Since clients
  //       // may occasionally be online during short time spans we want to increase the probability
  //       // of sync participants to successfully sync everything in the transaction, otherwise
  //       // no changes propagate and the transaction needs to start over when connectivity allows.
  //       realm.write(() => {
  //         return realm.create(Transaction, {
  //           datetime: etime,
  //           amount: cur_amount,
  //           currency: cur_currency,
  //           accountId: cur_account,
  //           description: desp,
  //         });
  //       });
  //     },
  //     [realm],
  // );

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
    interface ITransaction {
      _id: Realm.BSON.UUID;
      title: string;
      category: Category;
      datetime: number;
      isExpense: boolean;
      amount: number;
      amountInUSD: number;
      currency: string;
      account: Account;
      isRecurring: boolean;
      frequency?: string;
      endDate?: number;
      description?: string;
      attachments?: string;
    }

    const transactionToInsert: ITransaction = {
      _id: new Realm.BSON.UUID(),
      title,
      category: selectedCategory,
      datetime: epochTime,
      isExpense: transactionType === "expense",
      amount: amountInCents,
      amountInUSD: amountInCents,
      currency: selectedCurrency,
      account: selectedAccount,
      isRecurring,
    };
    if (isRecurring) {
      transactionToInsert.frequency = selectedFreq;
      if (selectedEndDate) {
        transactionToInsert.endDate = selectedEndDate;
      }
    }
    if (description) {
      transactionToInsert.description = description;
    }
    if (attachment) {
      transactionToInsert.attachments = attachment;
    }
    realm.write(() => {
      realm.create(Transaction, transactionToInsert);
      selectedAccount.balance +=
        amountInCents * (transactionType === "income" ? 1 : -1);
    });
    setKey((prevKey) => prevKey + 1);
    setAmountInCents(0);
    setIsRecurring(false);
    navigation.navigate("transaction");
  };

  let bg_color = "bg-s_yellow-100";
  let bg_color_dark = "dark:bg-s_yellow-dark";
  if (transactionType === "expense") {
    bg_color = "bg-s_red-100";
    bg_color_dark = "dark:bg-s_red-dark";
  } else if (transactionType === "income") {
    bg_color = "bg-s_green-100";
    bg_color_dark = "dark:bg-s_green-dark";
  }

  let navTitle = "New Expense";
  if (transactionType === "income") {
    navTitle = "New Income";
  }

  return (
    <SafeAreaInsetsView className={`${bg_color} ${bg_color_dark}`} key={key}>
      <ExpenseNav
        title={navTitle}
        titleColor="#FFFFFF"
        onLeftPress={() => navigation.navigate("transaction")}
      />
      <View className="w-full h-full">
        <View className="flex-row">
          <TouchableOpacity
            onPress={() => setIsBottomSheetVisible(true)}
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
        <TransactionForm
          onTitleChange={setTitle}
          onConfirmation={handleConfirmation}
          onAccountChange={setSelectedAccount}
          onCategoryChange={setSelectedCategory}
          onDateChange={setEpochTime}
          onDescriptionChange={setDescription}
          onAttachChange={setAttachment}
          categories={categories}
          accounts={accounts}
          isRecurring={isRecurring}
          toggleRecurring={() => setIsRecurring(!isRecurring)}
          onFrequencyChange={setSelectedFreq}
          onEndDateChange={setSelectedEndDate}
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
