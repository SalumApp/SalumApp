import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CashflowCard from "../components/Card/CashflowCard";
import NetWorthCard from "../components/Card/NetWorthCard";
import { TopNav } from "../components/Navigation/TopNav";

export const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.newHome, { height: useWindowDimensions().height }]}>
      <LinearGradient
        style={[
          styles.newHomeChild,
          {
            width: useWindowDimensions().width,
            height: useWindowDimensions().height * 1.5,
          },
        ]}
        locations={[0, 0.99]}
        colors={["#fff6e5", "rgba(248, 237, 216, 0)"]}
      />
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
        className="absolute w-full h-full"
      >
        <TopNav
          title="Home"
          onLeftPress={() => console.log("Left")}
          onRightPress={() => console.log("Right")}
          titleColor="#000000"
        />
        <Text className="relative text-xl text-gray-500 text-center pt-4">
          Left to spend in January
        </Text>
        <Text className="relative text-6xl font-semibold text-emerald-500 text-center pt-4">
          $100,000.00
        </Text>
        <ScrollView style={{ flex: 1 }}>
          <CashflowCard spendingNumber={4550} incomeNumber={8000} />
          <NetWorthCard netWorth={100000} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newHome: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  newHomeChild: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "relative",
  },
});
