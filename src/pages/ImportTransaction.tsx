import "react-native-get-random-values";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useRealm, useQuery, useObject } from "@realm/react";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import { readString } from "react-native-csv";
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import { MyButton } from "../components/Button/Button";
import DropdownMenuField from "../components/InputElements/DropdownMenuField";
import { TopNav } from "../components/Navigation/TopNav";
import { Account } from "../models/Account";
import { Category } from "../models/Category";
import { Currency } from "../models/Currency";
import { Transaction } from "../models/Transaction";
import { mainCurrency } from "../utils/Config";
import { convertToDateISO } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const ImportTransaction = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const realm = useRealm();
  const defaultCurrency = useObject(Currency, mainCurrency);
  const accounts = useQuery(Account);
  const accountOptions = accounts.map((i) => i.title);
  const defaultCategory = useQuery(Category, (collection) => {
    return collection.filtered("title == $0", "Uncategorized");
  })[0];

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [CSVContent, setCSVContent] = useState([]);
  const [headerList, setHeaderList] = useState(null);

  const pickDoc = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "text/csv",
    });

    if (result.canceled) {
      navigation.goBack();
    } else {
      const csvString = await FileSystem.readAsStringAsync(
        result.assets[0].uri,
      );
      let records = readString(csvString);
      setHeaderList(records.data[0]);
      records = readString(csvString, { header: true });
      setCSVContent(records.data);
    }
  };

  const handleContinueClick = () => {
    realm.write(() => {
      CSVContent.forEach((entry) => {
        if (entry[selectedAmount]) {
          let amount = parseFloat(entry[selectedAmount]);
          amount = Math.round(amount * 10 ** defaultCurrency.minorUnits);

          realm.create(Transaction, {
            _id: new Realm.BSON.UUID(),
            title: entry[selectedTitle],
            category: defaultCategory,
            datetime: new Date(convertToDateISO(entry[selectedDate])),
            isIncludeInCashFlow: true,
            isExpense: amount <= 0,
            amount: Math.abs(amount),
            amountInBaseCurrency: Math.abs(amount),
            currency: defaultCurrency,
            account: selectedAccount,
            isRecurring: false,
            isSplit: false,
          });
        }
      });
    });
    setShowConfirmation(true);
  };

  const textFormatting =
    "text-2xl font-medium text-s_dark-100 dark:text-s_light-100 mx-6 my-1";
  const rowViewFormatting = "flex-1 flex-col justify-between my-4";
  const dropdownView = "flex-1";
  const dropdownPlaceholder = "Matching Column";

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Match Fields"
        titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        onLeftPress={() => navigation.goBack()}
        right={<View className="w-14" />}
      />
      {!headerList && (
        <View onLayout={pickDoc} className="mt-8 h-20 mb-4">
          <MyButton onPress={pickDoc} text="Import" />
        </View>
      )}
      {headerList && (
        <>
          <ScrollView className="flex-col mx-6">
            <View className={`${rowViewFormatting}`}>
              <Text className={`${textFormatting}`}>Title</Text>
              <View className={`${dropdownView}`}>
                <DropdownMenuField
                  options={headerList}
                  placeHolder={dropdownPlaceholder}
                  onValueChange={(value) => setSelectedTitle(value)}
                  currentSelection={selectedTitle}
                />
              </View>
            </View>
            <View className={`${rowViewFormatting}`}>
              <Text className={`${textFormatting}`}>Date</Text>
              <View className={`${dropdownView}`}>
                <DropdownMenuField
                  options={headerList}
                  placeHolder={dropdownPlaceholder}
                  onValueChange={(value) => setSelectedDate(value)}
                  currentSelection={selectedDate}
                />
              </View>
            </View>
            <View className={`${rowViewFormatting}`}>
              <Text className={`${textFormatting}`}>Amount</Text>
              <View className={`${dropdownView}`}>
                <DropdownMenuField
                  options={headerList}
                  placeHolder={dropdownPlaceholder}
                  onValueChange={(value) => setSelectedAmount(value)}
                  currentSelection={selectedAmount}
                />
              </View>
            </View>
            <View className="mt-2">
              <Text className={`${textFormatting}`}>Account</Text>
              <DropdownMenuField
                options={accountOptions}
                placeHolder="Account"
                onValueChange={(value: string) =>
                  setSelectedAccount(accounts[accountOptions.indexOf(value)])
                }
                currentSelection={selectedAccount.title}
              />
            </View>
          </ScrollView>
          <View className="mt-8 h-20 mb-4">
            <MyButton onPress={handleContinueClick} text="Continue" />
          </View>
        </>
      )}
      {showConfirmation && (
        <Modal visible={showConfirmation} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View className="flex-1 bg-s_dark-100op justify-center items-center">
              <View className="flex-col bg-s_light-100 p-5 rounded-3xl items-center">
                <IconGlyph glyph="Success" dim={52} fill="#00A86B" />
                <Text className="text-lg font-medium">Import Complete</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </SafeAreaInsetsView>
  );
};
