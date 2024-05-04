import { NavigationProp, useNavigation } from "@react-navigation/native";
import "react-native-get-random-values";
import { useQuery, useRealm } from "@realm/react";
import * as React from "react";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import Realm from "realm";

import CurrencyCard from "../components/Card/CurrencyCard";
import { TopNav } from "../components/Navigation/TopNav";
import { Currency } from "../models/Currency";
import { addAlpha } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

interface CurrencySegmentProps {
  segmentTitle: string;
  currencyList: Realm.Results<Currency>;
  backgroundColor: string;
}

const CurrencySegment: React.FC<CurrencySegmentProps> = ({
  segmentTitle,
  currencyList,
  backgroundColor,
}) => {
  const realm = useRealm();
  const toggleCurrencyState = (currency: Currency) => {
    console.log(currency);
    if (currency.code === "USD") {
      alert("USD cannot be disabled.");
      return;
    }
    realm.write(() => {
      currency.enabled = !currency.enabled;
    });
  };

  return (
    <View className="m-4 py-4 rounded-3xl" style={{ backgroundColor }}>
      <Text className="pl-8 text-3xl font-semibold dark:text-s_light-80">
        {segmentTitle}
      </Text>
      {currencyList.map((currency) => {
        return (
          <CurrencyCard
            key={currency.code}
            currency={currency}
            onPress={() => toggleCurrencyState(currency)}
          />
        );
      })}
    </View>
  );
};

export const CurrencyScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();

  const enabledCurrencies = useQuery(Currency, (collection) => {
    return collection.filtered("enabled == $0", true);
  });

  const disabledCurrencies = useQuery(Currency, (collection) => {
    return collection.filtered("enabled = $0", false);
  });

  return (
    <SafeAreaInsetsView className="absolute w-full h-full bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Select Currencies"
        titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => console.log("Right")}
      />
      <ScrollView className="flex-1 mt-3">
        <CurrencySegment
          segmentTitle="Enabled"
          currencyList={enabledCurrencies}
          backgroundColor={addAlpha(ThemeColor.s_green["100"], 0.03)}
        />
        {disabledCurrencies.length !== 0 && (
          <CurrencySegment
            segmentTitle="Disabled"
            currencyList={disabledCurrencies}
            backgroundColor={addAlpha(ThemeColor.s_red["100"], 0.03)}
          />
        )}
      </ScrollView>
    </SafeAreaInsetsView>
  );
};
