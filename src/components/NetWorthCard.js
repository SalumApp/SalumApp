import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import { FontSize, Color, Border, Padding } from "../GlobalStyles";

const NetWorthCard = () => {
  return (
    <View style={[styles.netWorthAtAGlanceWrapper, styles.netLayout]}>
      <View style={[styles.netWorthAtAGlance, styles.netLayout]}>
        <View style={styles.netWorthAtAGlanceChild} />
        <View style={styles.frameParent}>
          <View style={styles.magiconsglyphecommerceShoWrapper}>
            <Image
              style={styles.magiconsglyphecommerceSho}
              contentFit="cover"
              source={require("../assets/magiconsglyphecommerce--shoppingnotifiaction1.png")}
            />
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.cashFlowParent}>
              <Text style={[styles.cashFlow, styles.kTypo]}>Net Worth</Text>
              <Text style={styles.subtextTypo}>Today</Text>
            </View>
            <View style={styles.kParent}>
              <Text style={[styles.k, styles.kTypo]}>$1,234K</Text>
              <Text style={[styles.placeholder, styles.subtextTypo]}>+1K</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.newHomeItem}
          source={require("../assets/group-214.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  netLayout: {
    height: 280,
    width: 336,
    position: "relative",
  },
  kTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  subtextTypo: {
    color: Color.baseLightLight20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
  },
  netWorthAtAGlanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.baseLightLight80,
    position: "absolute",
  },
  magiconsglyphecommerceSho: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  magiconsglyphecommerceShoWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.blueBlue20,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  cashFlow: {
    color: Color.baseDarkDark25,
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  cashFlowParent: {
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs,
    justifyContent: "space-between",
  },
  k: {
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
    color: Color.colorMediumseagreen,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  placeholder: {
    marginTop: 12,
  },
  kParent: {
    alignSelf: "stretch",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameGroup: {
    flex: 1,
    alignItems: "center",
    marginLeft: 9,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameParent: {
    marginTop: -132.5,
    width: "90.18%",
    top: "50%",
    right: "4.76%",
    left: "5.06%",
    flexDirection: "row",
    position: "absolute",
  },
  netWorthAtAGlance: {
    top: 0,
    left: 0,
  },
  netWorthAtAGlanceWrapper: {
    position: "relative",
    alignSelf: "center",
    paddingVertical: 9,
  },
  newHomeItem: {
    width: "100%",
    height: 160,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});

export default NetWorthCard;
