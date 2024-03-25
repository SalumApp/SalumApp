import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";

import TransferSvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/currency-exchange.svg";
import ExpenseSvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/expense.svg";
import IncomeSvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/income.svg";

interface NavProps {
  routeName: string;
  selectedTab: string;
  navigate: (name: any) => void;
}

export const AnimatedButton = ({
  routeName,
  selectedTab,
  navigate,
}: NavProps) => {
  const animation = new Animated.Value(0);
  let open = false;

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    open = !open;
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const transferStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      { scale: animation as Animated.AnimatedInterpolation<number> },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }) as Animated.AnimatedInterpolation<number>,
      },
    ],
  };

  const incomeStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      { scale: animation },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }) as Animated.AnimatedInterpolation<number>,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };

  const expenseStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [
      { scale: animation as Animated.AnimatedInterpolation<number> },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 70],
        }) as Animated.AnimatedInterpolation<number>,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }) as Animated.AnimatedInterpolation<number>,
      },
    ],
  };

  const switchExpense = () => {
    navigate("expense");
  };
  const switchIncome = () => {
    navigate("income");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, transferStyle, { backgroundColor: "#EEA519" }]}
        >
          <TransferSvg fill="white" width={36} height={36} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={switchIncome}>
        <Animated.View
          style={[styles.button, incomeStyle, { backgroundColor: "#00A86B" }]}
        >
          <IncomeSvg fill="white" width={36} height={36} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={switchExpense}>
        <Animated.View
          style={[styles.button, expenseStyle, { backgroundColor: "#FD3C4A" }]}
        >
          <ExpenseSvg fill="white" width={36} height={36} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, rotation]}>
          <Ionicons name="add" color="white" size={36} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    //position: "absolute"
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    backgroundColor: "#0077FF",
  },
});
