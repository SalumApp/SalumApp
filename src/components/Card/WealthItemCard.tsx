import "react-native-get-random-values";
import { useRealm } from "@realm/react";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Types } from "realm";

import { IconGlyph } from "../../assets/Glyph";
import { SalumInvestmentAPI } from "../../libs/SalumAPI";
import { Asset } from "../../models/Asset";
import { ThemeColor } from "../../utils/Theme";
import { MyButton } from "../Button/Button";
import PlainTextField from "../InputElements/PlainTextField";
import BottomSheetConfirmation from "../Sheet/BottomSheetConfirmation";

import Date = Types.Date;

interface WealthItemCardProps {
  asset: Asset;
}

const WealthItemCard: React.FC<WealthItemCardProps> = ({ asset }) => {
  const realm = useRealm();
  const API = new SalumInvestmentAPI();
  const [isTradeBottomSheetVisible, setIsTradeBottomSheetVisible] =
    useState(false);
  const [assetInformationAvailable, setAssetInformationAvailable] =
    useState(null);
  const [units, setUnits] = React.useState(0);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    React.useState(false);
  // const [priceHistory, setPriceHistory] = React.useState(null);

  const handleDateTimeConfirm = (date: Date) => {
    setTransactionDate(new Date(date.getTime()));
    setDateTimePickerVisibility(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setAssetInformationAvailable(false);
      try {
        const data = await API.getQuote(asset.symbol);
        realm.write(() => {
          asset.curPrice.quote = data.quote;
          asset.curPrice.datetime = data.datetime;
        });
        setAssetInformationAvailable(true);
      } catch (error) {
        console.error(error);
        setAssetInformationAvailable(false);
      }
    };

    fetchData();
  }, [isTradeBottomSheetVisible]);

  // React.useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchData = async () => {
  //     // get the data from the api
  //     const data = await API.getPriceHistory(asset.symbol);
  //     // set state with the result
  //     // console.log(data);
  //     setPriceHistory(data);
  //   };
  //   // call the function
  //   fetchData();
  //   // const result = fetchData()
  //   // make sure to catch any error
  //   // .catch(console.error);
  //   // console.log(result);
  // }, []);

  // React.useEffect(() => {
  //   realm.write(() => {
  // const curPrice = {
  //   datetime: new Date(),
  //   quote: tickerPrice,
  // };

  // realm.create(
  //   Asset,
  //   priceHistory
  //     ? {
  //         _id: asset._id,
  //         type: asset.type,
  //         unitsOwned: asset.unitsOwned,
  //         baseCurrency: asset.baseCurrency,
  //         priceHist: priceHistory,
  //         curPrice,
  //       }
  //     : {
  //         _id: asset._id,
  //         type: asset.type,
  //         unitsOwned: asset.unitsOwned,
  //         baseCurrency: asset.baseCurrency,
  //         curPrice,
  //       },
  //   UpdateMode.Modified,
  // );
  // if (priceHistory) {
  //   priceHistory.forEach((singleHist: Price) => {
  //     console.log(singleHist)
  //     asset.priceHist.push(singleHist);
  //   });
  // }
  //   });
  // }, [tickerPrice]);

  return (
    <>
      <TouchableOpacity
        className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75"
        onPress={() => setIsTradeBottomSheetVisible(true)}
      >
        <View className="flex-row pt-3 pb-3">
          <View className="pl-4 flex-col">
            <Text className="text-xl pt-1.5 font-medium dark:text-s_light-80">
              {asset.title}
            </Text>
            <Text className="pt-5 color-gray-500">
              {asset.unitsOwned} Units
            </Text>
          </View>
          <View className="pt-1.5 flex-col ml-auto pr-6">
            <Text className="text-xl font-medium ml-auto text-s_green">
              {asset.currency.symbol}
              {asset.currency.getAmountString(
                asset.unitsOwned * asset.curPrice.quote,
                5,
                false,
              )}
            </Text>
            <Text className="pt-5 color-gray-500 text-right">
              {asset.curPrice.quote.toFixed(2)} {asset.currency.code} ea.
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isTradeBottomSheetVisible}
        transparent
        animationType="slide"
      >
        <BlurView
          className="absolute h-full w-full"
          tint="dark"
          intensity={50}
        />
        <TouchableWithoutFeedback
          onPress={() => setIsTradeBottomSheetVisible(false)}
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
              <Text className="text-3xl font-medium dark:text-s_light-80">
                {asset.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsTradeBottomSheetVisible(false);
                  const timeout = Platform.OS === "ios" ? 1000 : 10;
                  setTimeout(
                    () => setIsDeleteConfirmationVisible(true),
                    timeout,
                  );
                }}
              >
                <IconGlyph
                  glyph="Trash"
                  dim={32}
                  fill={ThemeColor.s_red["100"]}
                />
              </TouchableOpacity>
            </View>
            <View className="flex-col mt-2 mb-4">
              {asset &&
                (asset.type === "Equity" || asset.type === "Crypto") && (
                  <>
                    {/*<View className="mx-4 mt-4">*/}
                    {/*  <PlainTextField*/}
                    {/*    customPlaceholder="Price"*/}
                    {/*    onChangeText={() => console.log("Something")}*/}
                    {/*  />*/}
                    {/*</View>*/}
                    <View className="mx-6 mt-4">
                      <PlainTextField
                        placeholder="Units"
                        onChangeText={(text: string) => {
                          const filteredText = text
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                          setUnits(
                            filteredText === "" ? 0 : parseFloat(filteredText),
                          );
                        }}
                      />
                    </View>
                    <View className="ml-2 mr-2 mt-6">
                      <TouchableOpacity
                        className="flex-row items-center justify-between mx-4 h-20 bg-s_light-100 dark:bg-s_dark-75 border border-gray-300 rounded-3xl px-4"
                        onPress={() => setDateTimePickerVisibility(true)}
                      >
                        <Text className="dark:text-s_light-80 text-2xl">
                          Date
                        </Text>
                        <Text className="text-2xl dark:text-s_light-80">
                          {transactionDate.toDateString()}
                        </Text>
                      </TouchableOpacity>
                      <DateTimePickerModal
                        isVisible={isDateTimePickerVisible}
                        mode="date"
                        display="inline"
                        onConfirm={handleDateTimeConfirm}
                        onCancel={() => setDateTimePickerVisibility(false)}
                      />
                    </View>
                  </>
                )}
            </View>
            <View className="flex-row mx-4 mt-6 items-center justify-between">
              <MyButton
                onPress={() => {
                  if (assetInformationAvailable) {
                    realm.write(() => {
                      const transacHist = {
                        datetime: transactionDate,
                        unitsTraded: units,
                      };
                      // @ts-ignore
                      asset.transactionHist.push(transacHist);
                      asset.unitsOwned += units;
                    });
                    setIsTradeBottomSheetVisible(false);
                  } else {
                    alert("An error occured. Please try again later.");
                  }
                }}
                text="Record Purchase"
                color="bg-s_green-100 dark:bg-s_green-dark"
              />
              <MyButton
                onPress={() => {
                  if (assetInformationAvailable) {
                    if (asset.unitsOwned < units) {
                      alert("Insufficient units owned.");
                    } else {
                      realm.write(() => {
                        const transacHist = {
                          datetime: transactionDate,
                          unitsTraded: units * -1,
                        };
                        // @ts-ignore
                        asset.transactionHist.push(transacHist);
                        asset.unitsOwned -= units;
                      });
                      setIsTradeBottomSheetVisible(false);
                    }
                  } else {
                    alert("An error occured. Please try again later.");
                  }
                }}
                text="Record Sale"
                color="bg-s_red-100 dark:bg-s_red-dark"
              />
            </View>
            <View className="h-20" />
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <BottomSheetConfirmation
        visible={isDeleteConfirmationVisible}
        onClose={() => setIsDeleteConfirmationVisible(false)}
        title="Remove this asset?"
        description="Are you sure do you want to remove this asset?"
        onPressLeft={() => {
          setIsDeleteConfirmationVisible(false);
          const timeout = Platform.OS === "ios" ? 1000 : 10;
          setTimeout(() => setIsTradeBottomSheetVisible(true), timeout);
        }}
        onPressRight={() => {
          realm.write(() => {
            realm.delete(asset);
          });
        }}
      />
    </>
  );
};

export default WealthItemCard;
