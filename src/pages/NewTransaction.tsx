import "react-native-get-random-values";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useObject, useQuery, useRealm } from "@realm/react";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";
import Realm from "realm";

import { TransactionForm } from "../components/Form/TransactionForm";
import { ExpenseNav } from "../components/Navigation/ExpenseNav";
import BottomSheet from "../components/Sheet/BottomSheet";
import { Account } from "../models/Account";
import { Category } from "../models/Category";
import { Currency } from "../models/Currency";
import { Friend } from "../models/Friend";
import { SplitTransaction } from "../models/SplitTransaction";
import { Transaction } from "../models/Transaction";
import { mainCurrency } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface TransacInterface {
  _id: Realm.BSON.UUID;
  title: string;
  category: Category;
  datetime: Date;
  isIncludeInCashFlow: boolean;
  isExpense: boolean;
  amount: number;
  amountInBaseCurrency: number;
  currency: Currency;
  account: Account;
  isRecurring: boolean;
  frequency?: string;
  endDate?: Date;
  isSplit: boolean;
  description?: string;
  attachments?: string;
}

interface NewTransactionProps {
  transactionType: string;
}

export const NewTransaction = ({ transactionType }: NewTransactionProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const realm = useRealm();
  const [key, setKey] = React.useState(0);

  const accounts = useQuery(Account);
  const friends = useQuery(Friend);
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
  const enabledCurrencies = useQuery(Currency, (collection) => {
    return collection.filtered("enabled == $0", true);
  });
  const defaultCurrency = useObject(Currency, mainCurrency);
  const currencyOptions = enabledCurrencies.map((currency) => currency.code);

  const [title, setTitle] = React.useState("");
  const [epochTime, setEpochTime] = React.useState(new Date());
  const [selectedAccount, setSelectedAccount] = React.useState(accounts[0]);
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const [selectedCurrency, setSelectedCurrency] =
    React.useState(defaultCurrency);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [amountInBaseUnits, setAmountInBaseUnits] = React.useState(0);
  const [description, setDescription] = React.useState(null);
  const [attachment, setAttachment] = React.useState(null);
  const [isRecurring, setIsRecurring] = React.useState(false);
  const [selectedFreq, setSelectedFreq] = React.useState("Frequency");
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
    null,
  );
  const [isSplit, setIsSplit] = React.useState(false);
  const [splitList, setSplitList] = React.useState<Friend[]>([]);
  const baseCurrency = useObject(Currency, mainCurrency);

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(enabledCurrencies[currencyOptions.indexOf(currency)]);
    setIsBottomSheetVisible(false);
  };

  const getCurrencySymbol = (currency: string) => {
    const supportedCurrencies = formatCurrency({ amount: 0, code: currency });
    return supportedCurrencies[2];
  };

  const handleAmountChange = (value: string) => {
    if (value === "") {
      value = "0";
    }
    setAmountInBaseUnits(parseInt(value, 10));
  };

  const handleConfirmation = () => {
    const transactionToInsert: TransacInterface = {
      _id: new Realm.BSON.UUID(),
      title,
      category: selectedCategory,
      datetime: epochTime,
      isIncludeInCashFlow: true,
      isExpense: transactionType === "expense",
      amount: amountInBaseUnits,
      amountInBaseCurrency: Math.round(
        baseCurrency.getAmountInBaseUnits(
          selectedCurrency.convertToFcy(
            baseCurrency,
            selectedCurrency.getAmount(amountInBaseUnits),
          ),
        ),
      ),
      currency: selectedCurrency,
      account: selectedAccount,
      isRecurring,
      isSplit,
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
      const transac = realm.create(Transaction, transactionToInsert);
      if (splitList.length !== 0) {
        splitList.forEach((friend) => {
          realm.create(SplitTransaction, {
            _id: new Realm.BSON.UUID(),
            friend,
            transaction: transac,
            amount: Math.round(
              transactionToInsert.amountInBaseCurrency / (splitList.length + 1),
            ),
          });
        });
      }
    });
    setKey((prevKey) => prevKey + 1);
    setAmountInBaseUnits(0);
    setSelectedCategory(categories[0]);
    setIsRecurring(false);
    setEpochTime(new Date());
    setAttachment(null);
    setSplitList([]);
    setSelectedAccount(accounts[0]);
    setSelectedCategory(categories[0]);
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
              {selectedCurrency.code}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row items-center w-full">
          <Text className="text-white text-3xl pl-8 mr-1">
            {getCurrencySymbol(selectedCurrency.code)}
          </Text>
          <TextInput
            className="text-s_light-100 text-6xl m-1 pr-5 pt-3 flex-1"
            keyboardType="number-pad"
            textAlign="left"
            value={selectedCurrency.getInputAmountString(amountInBaseUnits)}
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
          currentAccountSelection={selectedAccount.title}
          onAccountChange={setSelectedAccount}
          currentCategorySelection={selectedCategory.title}
          onCategoryChange={setSelectedCategory}
          onDateChange={setEpochTime}
          onDescriptionChange={setDescription}
          onAttachChange={setAttachment}
          categories={categories}
          accounts={accounts}
          friends={friends}
          isRecurring={isRecurring}
          toggleRecurring={() => setIsRecurring(!isRecurring)}
          isSplit={isSplit}
          toggleSplit={() => setIsSplit(!isSplit)}
          currentFrequencySelection={selectedFreq}
          onFrequencyChange={setSelectedFreq}
          onEndDateChange={setSelectedEndDate}
          transactionType={transactionType}
          curFriends={splitList}
          onFriendChange={setSplitList}
        />
      </View>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={currencyOptions}
        onOptionSelect={handleCurrencySelect}
      />
    </SafeAreaInsetsView>
  );
};
