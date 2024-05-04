import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AcknowledgementScreen } from "./src/pages/AcknowledgementScreen";
import { CategoryScreen } from "./src/pages/CategoryScreen";
import { CloudOptionsScreen } from "./src/pages/CloudOptionsScreen";
import { CurrencyScreen } from "./src/pages/CurrencyScreen";
import { DetailedAccount } from "./src/pages/DetailedAccount";
import { DetailedCategory } from "./src/pages/DetailedCategory";
import { ImportTransaction } from "./src/pages/ImportTransaction";
import { ManageAccountsScreen } from "./src/pages/ManageAccountsScreen";
import { SettingsScreen } from "./src/pages/SettingsScreen";
import { SetupPinInput } from "./src/pages/SetupPinInputPage";
import { WealthScreen } from "./src/pages/WealthScreen";

const OnBoardingStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const AccountStack = createStackNavigator();
const NetWealthStack = createStackNavigator();

export const OnBoardingStackNavigator = () => {
  return (
    <OnBoardingStack.Navigator
      initialRouteName="create pin"
      screenOptions={{ headerShown: false }}
      id={undefined}
    >
      <OnBoardingStack.Screen name="create pin" component={SetupPinInput} />
    </OnBoardingStack.Navigator>
  );
};

export const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName="settings list"
      screenOptions={{ headerShown: false }}
      id={undefined}
    >
      <SettingsStack.Screen name="settings list" component={SettingsScreen} />
      <SettingsStack.Screen
        name="manage category"
        component={CategoryStackNavigator}
      />
      <SettingsStack.Screen
        name="manage account"
        component={AccountStackNavigator}
      />

      <SettingsStack.Screen name="manage currency" component={CurrencyScreen} />
      <SettingsStack.Screen
        name="import from csv"
        component={ImportTransaction}
      />
      <SettingsStack.Screen name="backup sync" component={CloudOptionsScreen} />
      <SettingsStack.Screen
        name="acknowledgements"
        component={AcknowledgementScreen}
      />
    </SettingsStack.Navigator>
  );
};

export const CategoryStackNavigator = () => {
  return (
    <CategoryStack.Navigator
      initialRouteName="category list"
      screenOptions={{ headerShown: false }}
      id={undefined}
    >
      <CategoryStack.Screen name="category list" component={CategoryScreen} />
      <CategoryStack.Screen
        name="category detail"
        component={DetailedCategory}
      />
    </CategoryStack.Navigator>
  );
};

export const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="account list"
      screenOptions={{ headerShown: false }}
      id={undefined}
    >
      <AccountStack.Screen
        name="account list"
        component={ManageAccountsScreen}
      />
      <AccountStack.Screen name="account detail" component={DetailedAccount} />
    </AccountStack.Navigator>
  );
};

export const NetWealthStackNavigator = () => {
  return (
    <NetWealthStack.Navigator
      initialRouteName="net worth screen"
      screenOptions={{ headerShown: false }}
      id={undefined}
    >
      <NetWealthStack.Screen name="net worth screen" component={WealthScreen} />
    </NetWealthStack.Navigator>
  );
};
