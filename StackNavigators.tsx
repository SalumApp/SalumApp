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
import { NewBudgetScreen } from "./src/pages/NewBudgetScreen";

const BudgetStack = createStackNavigator();
const ExpenseStack = createStackNavigator();

export const BudgetStackNavigator = () => {
  const insets = useSafeAreaInsets();

  const NewBudget = ({ navigation }: StackScreenProps<any>) => {
    return <NewBudgetScreen />;
  };

  return (
    <BudgetStack.Navigator
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
      <ExpenseStack.Screen name="New Budget" component={NewBudget} />
    </BudgetStack.Navigator>
  );
};
