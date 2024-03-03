import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import CashflowCard from "../components/Card/CashflowCard";
import { TopNav } from "../components/Navigation/TopNav";

export const Home = () => {
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

      <SafeAreaView className="absolute w-full">
        <TopNav
          title="Home"
          onLeftPress={() => console.log("Left")}
          onRightPress={() => console.log("Right")}
        />
        <Text className="relative text-xl text-gray-500 text-center pt-3">
          Left to spend in January
        </Text>
        <Text className="relative text-6xl font-semibold text-red-500 text-center pt-3">
          $100,000.00
        </Text>
        <ScrollView>
          <CashflowCard spendingBalance={1234.56} />
          <CashflowCard spendingBalance={1234.56} />
        </ScrollView>
      </SafeAreaView>
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
