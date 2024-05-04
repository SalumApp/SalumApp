import "react-native-get-random-values";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useObject, useQuery, useRealm } from "@realm/react";
import { BlurView } from "expo-blur";
import * as React from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  useColorScheme,
  TouchableWithoutFeedback,
  Modal,
  Platform,
} from "react-native";
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import { MyButton } from "../components/Button/Button";
import WealthItemCard from "../components/Card/WealthItemCard";
import { PillToggleManyElem } from "../components/ControlElements/PillToggleManyElem";
import { InvestmentChart } from "../components/Graph/InvestmentChart";
import DropdownMenuField from "../components/InputElements/DropdownMenuField";
import PlainTextField from "../components/InputElements/PlainTextField";
import { TopNav } from "../components/Navigation/TopNav";
import { SalumInvestmentAPI } from "../libs/SalumAPI";
import { Asset } from "../models/Asset";
import { Currency } from "../models/Currency";
import { Transaction } from "../models/Transaction";
import { mainCurrency } from "../utils/Config";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

// const getValueHistory = (allTransactions: Realm.Results<Transaction>) => {
//   const groupedTransactions: { [key: string]: number } = allTransactions.reduce(
//     (acc: { [key: string]: number }, trans) => {
//       const dateKey = trans.datetime.toISOString().split("T")[0];
//       if (!acc[dateKey]) {
//         acc[dateKey] = 0;
//       }
//       acc[dateKey] +=
//         trans.currency.getAmount(trans.amountInBaseCurrency) *
//         (trans.isExpense ? -1 : 1);
//       return acc;
//     },
//     {},
//   );
//
//   const sortedDates = Object.keys(groupedTransactions).sort();
//
//   return sortedDates.map((date) => ({
//     date: new Date(date),
//     value: groupedTransactions[date],
//   }));
// };

export const WealthScreen = () => {
  const realm = useRealm();
  const colorScheme = useColorScheme();
  const titleColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const navigation = useNavigation<NavigationProp<any>>();
  const allAssets = useQuery(Asset);
  const allTransactions = useQuery(Transaction);
  const baseCurrency = useObject(Currency, mainCurrency);
  const API = new SalumInvestmentAPI();

  const cashDDATotal = allTransactions.reduce((acc, trans) => {
    return (
      acc +
      trans.currency.getAmount(trans.amountInBaseCurrency) *
        (trans.isExpense ? -1 : 1)
    );
  }, 0);

  const [chartDate, setChartDate] = useState(30);
  const [isAddBottomSheetVisible, setIsAddBottomSheetVisible] = useState(false);
  const [assetSelected, setAssetSelected] = useState(null);
  const [assetType, setAssetType] = React.useState(null);
  const [assetInfo, setAssetInfo] = React.useState(null);
  const [curPrice, setCurPrice] = React.useState(null);
  const [priceHist, setPriceHist] = React.useState(null);
  const [assetInformationAvailable, setAssetInformationAvailable] =
    useState(null);
  const [loading, setLoading] = React.useState(false);
  const [netWorth, setNetWorth] = React.useState(cashDDATotal);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectIndex = (index: number) => {
    setSelectedIndex(index);
    // Add more logic here based on the selected index
    switch (index) {
      case 0:
        setChartDate(30);
        break;
      case 1:
        setChartDate(90);
        break;
      case 2:
        setChartDate(120);
        break;
      case 3:
        setChartDate(365);
        break;
      case 4:
        setChartDate(1825);
        break;
      default:
        setChartDate(30);
        break;
    }
  };

  React.useEffect(() => {
    let totalAmount: number = cashDDATotal;
    allAssets.forEach((asset) => {
      totalAmount += asset.currency.convertToFcy(
        baseCurrency,
        asset.curPrice.quote * asset.unitsOwned,
      );
    });
    setNetWorth(totalAmount);
  }, [cashDDATotal, allAssets]);

  const handleResetAddForm = () => {
    setAssetSelected(null);
    setAssetType(null);
    setAssetInfo(null);
    setAssetInformationAvailable(null);
    setLoading(false);
  };

  const fetchTickerInfo = async () => {
    setLoading(true);
    let ticker = assetSelected;
    try {
      setAssetInformationAvailable(false);
      if (assetType === "Crypto") {
        ticker += "-" + baseCurrency.code;
        setAssetSelected(ticker);
      }

      const data = await API.getInfo(ticker);
      setAssetInfo(data);
      setAssetInformationAvailable(true);
    } catch (error) {
      console.error("getInfo: ", error);
      setAssetInformationAvailable(false);
    }

    try {
      setAssetInformationAvailable(false);
      const data = await API.getQuote(ticker);
      setCurPrice(data);
      setAssetInformationAvailable(true);
    } catch (error) {
      console.error("getQuote: ", error);
      setAssetInformationAvailable(false);
    }

    try {
      setAssetInformationAvailable(false);
      const today = new Date();
      today.setFullYear(today.getFullYear() - 5);
      const data = await API.getPriceHistory(ticker, today);
      setPriceHist(data);
      setAssetInformationAvailable(true);
    } catch (error) {
      console.error("getPriceHistory: ", error);
      setAssetInformationAvailable(false);
    }
    setLoading(false);
  };

  const handleConfirmAddForm = () => {
    realm.write(() => {
      const currencyUsed = realm.objectForPrimaryKey(
        "Currency",
        assetInfo.currency,
      );
      // @ts-ignore
      realm.create(Asset, {
        _id: new Realm.BSON.UUID(),
        type: assetType,
        unitsOwned: 0,
        currency: currencyUsed,
        priceHist,
        curPrice,
        symbol: assetSelected,
        title: assetInfo.name,
        description: assetInfo.description,
      });
    });
    setIsAddBottomSheetVisible(false);
    handleResetAddForm();
  };

  return (
    <>
      <SafeAreaInsetsView className="flex-1 bg-s_light-60 dark:bg-s_dark_navy-100">
        <TopNav
          title="Wealth"
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
              onPress={() => setIsAddBottomSheetVisible(true)}
              className="pl-1 pr-5"
            >
              <IconGlyph glyph="Plus" dim={24} fill={titleColor} />
            </TouchableOpacity>
          }
        />
        <View className="flex-row mx-4 mt-3 mb-2 items-center">
          <View className="flex-1 items-center">
            <Text className="font-bold text-5xl dark:text-s_light-80">
              {netWorth > 0 ? "" : "-"}
              {baseCurrency.symbol}
              {baseCurrency.getAmountString(
                Math.abs(netWorth),
                undefined,
                false,
              )}
            </Text>
          </View>
        </View>
        <View className="pt-10">
          <InvestmentChart chartDate={chartDate} />

          <View className="mx-4">
            <PillToggleManyElem
              labels={["1m", "3m", "6m", "1y", "5y"]}
              selectedIndex={selectedIndex}
              onSelect={handleSelectIndex}
            />
          </View>
        </View>
        <View className="w-11/12 self-center">
          {/*        <PillToggleTwoElem
          onPressLeft={onAssetPress}
          onPressRight={onLiabilityPress}
          isEnabled={isAssetEnabled}
          optionsToggle={["Asset", "Liability"]}
        />*/}
        </View>
        <View className="mt-4 flex-1">
          <ScrollView className="mb-2">
            <View className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75">
              <View className="flex-row pt-3 pb-3">
                <View className="pl-4 flex-col">
                  <Text className="text-xl pt-1.5 font-medium dark:text-s_light-80">
                    Liquids
                  </Text>
                  <Text className="pt-5 color-gray-500">
                    {baseCurrency.code}
                  </Text>
                </View>
                <View className="pt-1.5 flex-col ml-auto pr-6">
                  <Text
                    className={`text-xl font-medium ml-auto ${cashDDATotal < 0 ? "text-s_red-100" : "text-s_green-100"}`}
                  >
                    {cashDDATotal > 0 ? "" : "-"}
                    {baseCurrency.symbol}
                    {baseCurrency.getAmountString(
                      Math.abs(cashDDATotal),
                      undefined,
                      false,
                    )}
                  </Text>
                </View>
              </View>
            </View>
            {allAssets &&
              allAssets.map((asset) => {
                return (
                  <WealthItemCard key={asset._id.toString()} asset={asset} />
                );
              })}
          </ScrollView>
        </View>
      </SafeAreaInsetsView>

      {/*Add Bottom Sheet*/}
      <Modal
        visible={isAddBottomSheetVisible}
        transparent
        animationType="slide"
      >
        <BlurView
          className="absolute h-full w-full"
          tint="dark"
          intensity={50}
        />
        <TouchableWithoutFeedback
          onPress={() => setIsAddBottomSheetVisible(false)}
        >
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="bg-s_light-100 dark:bg-s_dark-100 rounded-t-3xl"
        >
          <View className="items-center py-2.5 pt-4 bg-transparent">
            <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1" />
          </View>
          <View className="flex-col min-h-fit">
            <View className="flex-row px-6 pb-6 items-center justify-between">
              <Text className="text-3xl font-medium">Add a new Asset</Text>
              <TouchableOpacity onPress={handleResetAddForm}>
                <IconGlyph
                  glyph="Trash"
                  dim={32}
                  fill={ThemeColor.s_red["100"]}
                />
              </TouchableOpacity>
            </View>
            {loading && <ActivityIndicator size="large" />}
            {!loading && (
              <View className="flex-col mt-6 mb-4">
                <DropdownMenuField
                  options={["Equity", "Crypto", "Other"]}
                  placeHolder="Type"
                  onValueChange={(value: string) => {
                    handleResetAddForm();
                    setAssetType(value);
                  }}
                  currentSelection={assetType}
                  disabled={assetInformationAvailable}
                />
                {assetType &&
                  (assetType === "Equity" || assetType === "Crypto") && (
                    <>
                      <View className="mx-4 mt-4">
                        <PlainTextField
                          placeholder="Ticker Symbol"
                          onChangeText={setAssetSelected}
                          autoCapitalize="characters"
                          value={
                            assetInformationAvailable ? assetSelected : null
                          }
                          editable={!assetInformationAvailable}
                        />
                      </View>
                      {assetInformationAvailable && (
                        <>
                          <ScrollView className="max-h-56 mx-4 mt-4">
                            <Text className="text-3xl pt-2 py-4 text-s_dark-100 dark:text-s_light-100">
                              {assetInfo.name}
                            </Text>
                            <Text className="text-2xl pt-2 py-4 text-s_dark-100 dark:text-s_light-100">
                              {assetInfo.website}
                            </Text>
                            <Text className="pt-2 py-4 text-s_dark-100 dark:text-s_light-100">
                              {assetInfo.description}
                            </Text>
                          </ScrollView>
                          <View className="mt-4 flex-row mx-2 items-center justify-between">
                            <MyButton
                              onPress={handleConfirmAddForm}
                              text="Confirm"
                            />
                          </View>
                        </>
                      )}
                      {!assetInformationAvailable && (
                        <View className="mt-4 flex-row mx-2 items-center justify-between">
                          <MyButton onPress={fetchTickerInfo} text="Verify" />
                        </View>
                      )}
                    </>
                  )}
              </View>
            )}
            <View className="h-20" />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};
