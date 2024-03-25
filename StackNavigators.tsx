import { getHeaderTitle } from "@react-navigation/elements";
import {
  createStackNavigator,
  StackHeaderProps,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ExpenseNav } from "./src/components/Navigation/ExpenseNav";
import { NewTransaction } from "./src/pages/NewTransaction";

const ExpenseStack = createStackNavigator();
const IncomeStack = createStackNavigator();

export const ExpenseStackNavigator = () => {
  const insets = useSafeAreaInsets();

  const Expense = ({ navigation }: StackScreenProps<any>) => {
    return (
      <NewTransaction
        transactionType="expense"
        onConfirmation={() => navigation.navigate("home")}
      />
    );
  };

  return (
    <ExpenseStack.Navigator
      screenOptions={{
        headerMode: "screen",
        header: ({ navigation, route, options }: StackHeaderProps) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <View
              style={{
                backgroundColor: "#FD3C4A",
                paddingTop: insets.top,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              }}
            >
              <ExpenseNav
                title={title}
                titleColor="#FFFFFF"
                onLeftPress={() => navigation.navigate("home")}
              />
            </View>
          );
        },
      }}
      id={undefined}
    >
      <ExpenseStack.Screen name="Expense" component={Expense} />
    </ExpenseStack.Navigator>
  );
};

export const IncomeStackNavigator = () => {
  const insets = useSafeAreaInsets();

  const Income = ({ navigation }: StackScreenProps<any>) => {
    return (
      <NewTransaction
        transactionType="income"
        onConfirmation={() => navigation.navigate("home")}
      />
    );
  };

  return (
    <IncomeStack.Navigator
      screenOptions={{
        headerMode: "screen",
        header: ({ navigation, route, options }: StackHeaderProps) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <View
              style={{
                backgroundColor: "#00A86B",
                paddingTop: insets.top,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              }}
            >
              <ExpenseNav
                title={title}
                titleColor="#FFFFFF"
                onLeftPress={() => navigation.navigate("home")}
              />
            </View>
          );
        },
      }}
      id={undefined}
    >
      <ExpenseStack.Screen name="Income" component={Income} />
    </IncomeStack.Navigator>
  );
};
