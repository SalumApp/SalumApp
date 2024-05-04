// @ts-nocheck
import "react-native-get-random-values";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useObject, useQuery, useRealm } from "@realm/react";
import * as React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import Realm, { UpdateMode } from "realm";

import { IconGlyph } from "../assets/Glyph";
import { MyButton } from "../components/Button/Button";
import { TopNav } from "../components/Navigation/TopNav";
import BottomSheet from "../components/Sheet/BottomSheet";
import BottomSheetConfirmation from "../components/Sheet/BottomSheetConfirmation";
import ColorPickerBottomSheet from "../components/Sheet/ColorPickerBottomSheet";
import IconPickerBottomSheet from "../components/Sheet/IconPickerBottomSheet";
import { Account } from "../models/Account";
import { Category } from "../models/Category";
import { Currency } from "../models/Currency";
import { Transaction } from "../models/Transaction";
import { accountTypes, mainCurrency } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const DetailedAccount = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const realm = useRealm();
  const { accountId } = route.params;
  const account = useObject(Account, accountId);
  const enabledCurrencies = useQuery(Currency, (collection) => {
    return collection.filtered("enabled == $0", true);
  });
  const defaultCurrency = useObject(Currency, mainCurrency);
  const currencyOptions = enabledCurrencies.map((currency) => currency.code);
  const uncategory = useQuery(Category, (collection) => {
    return collection.filtered("title == $0", "Uncategorized");
  })[0];

  const [accountTitle, setAccountTitle] = React.useState(
    account ? account.title : "",
  );
  const [accountDescription, setAccountDescription] = React.useState(
    account ? account.description : null,
  );
  const [selectedColor, setSelectedColor] = React.useState(
    account ? account.color : "rgb(0, 119, 255)",
  );
  const [selectedIcon, setSelectedIcon] = React.useState(
    account ? account.glyph || "More" : "More",
  );
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    account ? account.currency : defaultCurrency,
  );
  const [selectedType, setSelectedType] = React.useState(
    account && account.isCredit ? "Credit" : "Deposit",
  );
  const [amountInCents, setAmountInCents] = React.useState(
    account ? account.getBalance() : 0,
  );
  const [isCurrencyBottomSheetVisible, setIsCurrencyBottomSheetVisible] =
    React.useState(false);
  const [isTypeBottomSheetVisible, setIsTypeBottomSheetVisible] =
    React.useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = React.useState(false);
  const [isIconPickerVisible, setIsIconPickerVisible] = React.useState(false);

  // const [attachedImage, setAttachedImage] = React.useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    React.useState(false);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setIsColorPickerVisible(false);
  };

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setIsIconPickerVisible(false);
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(enabledCurrencies[currencyOptions.indexOf(currency)]);
    setIsCurrencyBottomSheetVisible(false);
  };

  const handleTypeSelect = (accountTyp: string) => {
    setSelectedType(accountTyp);
    setIsTypeBottomSheetVisible(false);
  };

  const handleAmountChange = (value: string) => {
    setAmountInCents(parseInt(value, 10));
  };

  const saveChanges = () => {
    // Save the changes to the category object in Realm
    // realm.create(Transaction, {
    //   _id: new Realm.BSON.UUID(),
    //   title: `Open Account ${accountTitle}`,
    //   category: uncategory,
    //   datetime: transferDate,
    //   isIncludeInCashFlow: false,
    //   isExpense: true,
    //   amount: amountInCents,
    //   amountInBaseCurrency: amountInCents,
    //   currency: selectedCurrency,
    //   account: selectedFromAccount,
    //   isRecurring: false,
    // });

    realm.write(() => {
      const acc = realm.create(
        Account,
        {
          _id: accountId,
          title: accountTitle,
          isCredit: selectedType === "Credit",
          currency: selectedCurrency,
          color: selectedColor,
          glyph: selectedIcon,
          description: accountDescription,
        },
        UpdateMode.Modified,
      );
      if (amountInCents !== 0) {
        realm.create(
          Transaction,
          {
            _id: new Realm.BSON.UUID(),
            title: `Balance ${accountTitle}`,
            category: uncategory,
            datetime: new Date(),
            isIncludeInCashFlow: false,
            isExpense: false,
            amount: amountInCents,
            amountInBaseCurrency: Math.round(
              defaultCurrency.getAmountInBaseUnits(
                selectedCurrency.convertToFcy(
                  defaultCurrency,
                  selectedCurrency.getAmount(amountInCents),
                ),
              ),
            ),
            currency: selectedCurrency,
            account: acc,
            isRecurring: false,
            isSplit: false,
          },
          UpdateMode.Modified,
        );
      }
    });
    navigation.goBack();
  };

  const handleAccountDelete = () => {
    account
      .linkingObjects<Transaction>("Transaction", "account")
      .forEach((trans) => {
        realm.write(() => {
          realm.delete(trans);
        });
      });

    realm.write(() => {
      realm.delete(account);
    });
    navigation.goBack();
  };
  return (
    <SafeAreaInsetsView
      topInsetColor={selectedColor}
      className="flex-1 bg-s_light-80 dark:bg-s_dark-100"
    >
      <TopNav
        title={account ? "Account Detail" : "New Account"}
        titleColor="#FFFFFF"
        bgColor={selectedColor}
        onLeftPress={() => navigation.goBack()}
        right={
          account ? (
            <TouchableOpacity
              onPress={() => setIsDeleteConfirmationVisible(true)}
              className="pr-5"
            >
              <IconGlyph glyph="Trash" dim={32} fill="#FFFFFF" />
            </TouchableOpacity>
          ) : (
            <View className="w-8" />
          )
        }
      />
      <View
        className="p-4 items-center justify-center rounded-b-3xl"
        style={{ backgroundColor: selectedColor }}
      >
        <TextInput
          className="text-4xl font-medium text-s_light-100 text-center"
          value={accountTitle}
          onChangeText={setAccountTitle}
          placeholder="Enter account name"
          placeholderTextColor="#FFFFFF"
          selectionColor="#FFFFFF"
        />
      </View>
      <ScrollView className="">
        <View className="items-center mt-8">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-2">
            Account Type
          </Text>
          <TouchableOpacity onPress={() => setIsTypeBottomSheetVisible(true)}>
            <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
              {selectedType}
            </Text>
          </TouchableOpacity>
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-2">
            Balance Account
          </Text>
          <TouchableOpacity
            onPress={() => setIsCurrencyBottomSheetVisible(true)}
          >
            <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
              {selectedCurrency.code}
            </Text>
          </TouchableOpacity>
          <TextInput
            className="text-6xl font-medium text-s_dark-100 dark:text-s_light-100 text-center"
            keyboardType="number-pad"
            textAlign="left"
            value={selectedCurrency.getInputAmountString(amountInCents)}
            onChangeText={(text) =>
              handleAmountChange(text.replace(/[^0-9]/g, ""))
            }
            placeholder="0.00"
            placeholderTextColor="#A0A0A0"
            selectionColor="#A0A0A0"
          />
        </View>
        <View className="items-center mt-8">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Account Icon
          </Text>
          <TouchableOpacity onPress={() => setIsIconPickerVisible(true)}>
            <IconGlyph
              glyph={selectedIcon}
              dim={150}
              fill={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
            />
          </TouchableOpacity>
        </View>

        <View className="mx-4 mt-8 items-center">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Account Color
          </Text>
        </View>

        <TouchableOpacity
          className="h-24 w-24 rounded-full self-center border-s_light-40 border-2 mt-3"
          style={{ backgroundColor: selectedColor }}
          onPress={() => setIsColorPickerVisible(true)}
        />
        <View className="mx-4 mt-8 items-center">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Description
          </Text>
          <TextInput
            className="text-xl font-medium text-s_light-20 dark:text-s_light-20 mb-4 px-4 text-center"
            value={accountDescription}
            onChangeText={setAccountDescription}
            placeholder="Enter account description"
            placeholderTextColor="#A0A0A0"
            selectionColor="#A0A0A0"
            multiline
            numberOfLines={3}
          />
        </View>

        {/*<View className="mx-4 mt-4 items-center">*/}
        {/*  <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-2">Account Logo</Text>*/}
        {/*  <Text className="text-xl font-medium text-s_light-20">Optional</Text>*/}
        {/*  <View className="w-full">*/}
        {/*    <AttachFileField customPlaceholder="Attach Logo" onAttachChange={() => {*/}
        {/*      // setAttachedImage(data);*/}
        {/*      console.log("logo attached");*/}
        {/*    }} />*/}
        {/*  </View>*/}
        {/*</View>*/}

        {/* Add other modifiable fields */}
      </ScrollView>
      <View className="h-20 mx-4 mb-8 mt-8">
        <MyButton onPress={saveChanges} text="Save Changes" />
      </View>
      <ColorPickerBottomSheet
        visible={isColorPickerVisible}
        onClose={() => setIsColorPickerVisible(false)}
        onColorSelect={handleColorSelect}
      />
      <IconPickerBottomSheet
        visible={isIconPickerVisible}
        onClose={() => setIsIconPickerVisible(false)}
        onIconSelect={handleIconSelect}
      />
      <BottomSheet
        visible={isCurrencyBottomSheetVisible}
        onClose={() => setIsCurrencyBottomSheetVisible(false)}
        options={currencyOptions}
        onOptionSelect={handleCurrencySelect}
      />
      <BottomSheet
        visible={isTypeBottomSheetVisible}
        onClose={() => setIsTypeBottomSheetVisible(false)}
        options={accountTypes}
        onOptionSelect={handleTypeSelect}
      />
      <BottomSheetConfirmation
        visible={isDeleteConfirmationVisible}
        onClose={() => setIsDeleteConfirmationVisible(false)}
        title="Remove this account?"
        description="Are you sure do you want to remove this account?"
        onPressLeft={() => setIsDeleteConfirmationVisible(false)}
        onPressRight={handleAccountDelete}
      />
    </SafeAreaInsetsView>
  );
};
