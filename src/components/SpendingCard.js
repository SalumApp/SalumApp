import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Color, FontSize, Border, Padding } from "../GlobalStyles";

const SpendingCard = () => {
  return (
    <View style={[styles.spendingAtAGlanceWrapper]}>
      <View style={[styles.spendingAtAGlance, styles.spendingLayout]}>
        <View style={styles.spendingAtAGlanceChild} />
        <View style={styles.frameParent}>
          <View style={styles.magiconsglyphfinancetransacWrapper}>
            <Image
              style={styles.magiconsglyphfinancetransac}
              contentFit="cover"
              source={require("../assets/magiconsglyphfinancetransaction.png")}
            />
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.cashFlowParent}>
              <Text style={styles.cashFlow}>Spending</Text>
              <Text style={styles.salaryTypo}>January</Text>
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textClr]}>+$5,000.00</Text>
              <Text style={[styles.placeholder, styles.salaryTypo]}>
                Placeholder
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <Text style={[styles.salary, styles.salaryTypo]}>Salary</Text>
          <Text style={[styles.expenses, styles.incomeTypo]}>Expenses</Text>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/rectangle-223.png")}
          />
          <View style={[styles.frameInner, styles.framePosition]} />
          <View style={[styles.rectangleView, styles.framePosition]} />
          <Text style={[styles.dining, styles.diningTypo]}>Dining</Text>
          <Text style={[styles.shopping, styles.diningTypo]}>Shopping</Text>
          <Text style={[styles.recurring, styles.diningTypo]}>Recurring</Text>
          <Text style={[styles.income, styles.incomeTypo]}>Income</Text>
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line-6.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>$8000</Text>
          <Text style={[styles.text2, styles.textTypo]}>$3000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spendingLayout: {
    height: 192,
    width: 336,
    position: "relative",
  },
  textClr: {
    color: Color.colorMediumseagreen,
    textAlign: "left",
  },
  salaryTypo: {
    color: Color.baseLightLight20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
  },
  incomeTypo: {
    color: Color.colorBlack,
    left: 3,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    position: "absolute",
  },
  framePosition: {
    top: 19,
    height: 10,
    position: "absolute",
  },
  diningTypo: {
    top: 27,
    color: Color.baseLightLight20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    position: "absolute",
  },
  spendingAtAGlanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.baseLightLight80,
    position: "relative",
  },
  magiconsglyphfinancetransac: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  magiconsglyphfinancetransacWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.greenGreen20,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  cashFlow: {
    color: Color.baseDarkDark25,
    textAlign: "left",
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  cashFlowParent: {
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs,
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
    fontSize: FontSize.size_base,
    color: Color.colorMediumseagreen,
  },
  placeholder: {
    marginTop: 12,
  },
  parent: {
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
    marginTop: -76,
    width: "90.18%",
    top: "50%",
    right: "5.06%",
    left: "4.76%",
    flexDirection: "row",
    position: "absolute",
  },
  frameChild: {
    top: 64,
    borderTopRightRadius: Border.br_71xl,
    borderBottomRightRadius: Border.br_71xl,
    backgroundColor: Color.colorMediumseagreen,
    width: 280,
    height: 10,
    left: 0,
    position: "absolute",
  },
  salary: {
    top: 73,
    left: 4,
    position: "absolute",
  },
  expenses: {
    top: 2,
  },
  frameItem: {
    width: 211,
    left: 0,
  },
  frameInner: {
    backgroundColor: Color.colorOrange,
    width: 73,
    left: 0,
  },
  rectangleView: {
    left: 73,
    backgroundColor: Color.colorBlueviolet,
    width: 79,
  },
  dining: {
    left: 155,
  },
  shopping: {
    left: 3,
    top: 27,
  },
  recurring: {
    left: 76,
  },
  income: {
    top: 49,
  },
  lineIcon: {
    maxWidth: "100%",
    height: 87,
    top: 2,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  text1: {
    top: 48,
    left: 233,
    fontSize: FontSize.size_smi,
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    position: "absolute",
  },
  text2: {
    top: 3,
    left: 163,
    color: Color.colorCrimson_100,
    textAlign: "left",
  },
  rectangleParent: {
    marginLeft: -149,
    bottom: 60,
    left: "50%",
    width: 215,
    height: 49,
    position: "absolute",
  },
  spendingAtAGlance: {
    top: 0,
    left: 0,
  },
  spendingAtAGlanceWrapper: {
    position: "relative",
    alignSelf: "center",
    paddingVertical: 9,
  },
});

export default SpendingCard;
