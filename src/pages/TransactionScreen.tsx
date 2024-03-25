import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PillButton } from "../components/Button/PillButton";
import { TransactionList } from "../components/List/TransactionList";
import { TopNav } from "../components/Navigation/TopNav";

export const TransactionScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.newHome, { height: useWindowDimensions().height }]}>
      <View
        className="absolute w-full h-full"
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <TopNav
          title="Transactions"
          titleColor="#000000"
          onLeftPress={() => console.log("Left")}
          onRightPress={() => console.log("Right")}
        />
        {/* Top Nav Bar*/}
        <View className="flex flex-column">
          <PillButton onPress={() => console.log("Pressed")} text="March" />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <TransactionList />
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
