import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { Border, Color, FontSize } from "../GlobalStyles";
import NavBar from "../components/NavBar";
import NetWorthCard from "../components/NetWorthCard";
import SpendingCard from "../components/SpendingCard";

const NewHome = ({ route }) => {
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
        style={[
          styles.syncIconContainer,
          styles.topNavigationFlexBox,
          styles.topNavigation,
        ]}
      >
        <Image
          style={styles.syncIcon}
          contentFit="cover"
          source={require("../assets/magiconsglyphuser-interfacesuccess.png")}
        />
        <Text style={styles.home}>Home</Text>
        <Image
          style={styles.syncIcon}
          contentFit="cover"
          source={require("../assets/magiconsglyphecommerce--shoppingnotifiaction.png")}
        />
      </View>

      <ScrollView
        style={[
          {
            width: "100%",
            position: "absolute",
            top: 64,
            height: 700,
          },
        ]}
      >
        <Text style={styles.leftToSpendHeader}>Left to Spend in January</Text>
        <Text style={styles.leftToSpendNumber}>-$123,456.78</Text>

        <SpendingCard />
        <NetWorthCard style={{ marginTop: 9 }} />
      </ScrollView>

      <NavBar
        container={require("../assets/container.png")}
        magiconsGlyphUserInterfac={require("../assets/magiconsglyphuser-interfacehome.png")}
        magiconsGlyphFinancetrans={require("../assets/magiconsglyphfinancetransaction1.png")}
        glyphFinancewallet={require("../assets/glyphfinancewallet.png")}
        meeting={require("../assets/meeting.png")}
        add={require("../assets/add.png")}
        menuHomePosition="absolute"
        menuHomeLeft={0}
        menuHomeWidth={useWindowDimensions().width}
        menuHomeBottom="0%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topNavigationFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  newHomeChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_13xl,
    borderBottomLeftRadius: Border.br_13xl,
    backgroundColor: "transparent",
    position: "relative",
  },
  leftToSpendHeader: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    color: Color.baseLightLight20,
    position: "relative",
    alignSelf: "center",
    top: "0%",
  },
  leftToSpendNumber: {
    fontSize: 40,
    color: Color.redRed100,
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    position: "relative",
    alignSelf: "center",
    top: 0,
  },
  syncIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.titleTitle2_size,
    color: Color.colorBlack,
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    position: "relative",
    alignSelf: "center",
  },
  syncIconContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    left: "0%",
  },
  topNavigation: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: "absolute",
  },
  newHome: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default NewHome;
