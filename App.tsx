import "react-native-gesture-handler";
import "react-native-get-random-values";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { RealmProvider } from "@realm/react";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import React, { useEffect, useRef } from "react";
import "./global.css";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Realm from "realm";

import BottomTabNavigator from "./BottomTabNavigator";
import { schemas } from "./src/models";
import { Account } from "./src/models/Account";
import { Category } from "./src/models/Category";
import { Transaction } from "./src/models/Transaction";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

// import { vars, useColorScheme } from "nativewind";

// const themes = {
//   blue: {
//     light: vars({
//       "--color-primary": "black",
//       "--color-secondary": "white",
//     }),
//     dark: vars({
//       "--color-primary": "white",
//       "--color-secondary": "dark",
//     }),
//   },
//   violet: {
//     light: vars({
//       "--color-primary": "black",
//       "--color-secondary": "white",
//     }),
//     dark: vars({
//       "--color-primary": "white",
//       "--color-secondary": "dark",
//     }),
//   },
//   tritanopia: {
//     light: vars({
//       "--color-primary": "red",
//       "--color-secondary": "green",
//     }),
//     dark: vars({
//       "--color-primary": "green",
//       "--color-secondary": "red",
//     }),
//   },
//   protanopiaDeuteranopia: {
//     light: vars({
//       "--color-primary": "red",
//       "--color-secondary": "green",
//     }),
//     dark: vars({
//       "--color-primary": "green",
//       "--color-secondary": "red",
//     }),
//   },
// };
//
// 'Interface ThemeProps {
//   name: string;
//   children: React.ReactNode;
// }
//
// function Theme({ name, children }: ThemeProps) {
//   const { colorScheme } = useColorScheme();
//   return (
//     <View style={themes[name as keyof typeof themes][colorScheme]}>
//       {children}
//     </View>
//   );
// }
const initializeDataIfNeeded = async () => {
  const realm = await Realm.open({
    schema: [Account, Category, Transaction],
  });

  const dataEntries = realm.objects("Category");

  if (dataEntries.length === 0) {
    realm.write(() => {
      realm.create("Category", {
        title: "Uncategorized",
        isExpense: true,
        color: "rgb(253 60 74)",
        glyph: "More",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Grocery",
        isExpense: true,
        color: "rgb(238 165 25)",
        glyph: "Cart",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Dining",
        isExpense: true,
        color: "rgb(0 168 107)",
        glyph: "Restaurant",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Bills & Utilities",
        isExpense: true,
        color: "rgb(127 61 255)",
        glyph: "Recurring-bill",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Transport",
        isExpense: true,
        color: "rgb(0 119 255)",
        glyph: "Car",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Travel",
        isExpense: true,
        color: "rgb(22, 23, 25)",
        glyph: "Airplane",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Shopping",
        isExpense: true,
        color: "rgb(0, 121, 178)",
        glyph: "Shopping-bag",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Wages",
        isExpense: false,
        color: "rgb(0 119 255)",
        glyph: "Salary",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Passive",
        isExpense: false,
        color: "rgb(238 165 25)",
        glyph: "Piggy-bank",
        hasBudget: false,
      });
      realm.create("Category", {
        title: "Investment",
        isExpense: false,
        color: "rgb(0 168 107)",
        glyph: "Presentation-3",
        hasBudget: false,
      });
    });
  }

  const testingAccount = realm.objects("Account");
  if (testingAccount.length === 0) {
    realm.write(() => {
      realm.create("Account", {
        _id: new Realm.BSON.UUID(),
        title: "Chase Checking",
        type: "Checking",
        currency: "USD",
        balance: 0,
      });
      realm.create("Account", {
        _id: new Realm.BSON.UUID(),
        title: "Chase Saving",
        type: "Saving",
        currency: "USD",
        balance: 0,
      });
      realm.create("Account", {
        _id: new Realm.BSON.UUID(),
        title: "Bank of America Checking",
        type: "Checking",
        currency: "USD",
        balance: 0,
      });
    });
  }
  realm.close();
};

function App() {
  useEffect(() => {
    initializeDataIfNeeded().catch((error) => {
      console.error(error);
    });
  }, []);

  const tabBarRef = useRef(null);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./src/assets/fonts/Inter-Black.otf"),
    "Inter-BlackItalic": require("./src/assets/fonts/Inter-BlackItalic.otf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.otf"),
    "Inter-BoldItalic": require("./src/assets/fonts/Inter-BoldItalic.otf"),
    "Inter-ExtraBold": require("./src/assets/fonts/Inter-ExtraBold.otf"),
    "Inter-ExtraBoldItalic": require("./src/assets/fonts/Inter-ExtraBoldItalic.otf"),
    "Inter-ExtraLight": require("./src/assets/fonts/Inter-ExtraLight.otf"),
    "Inter-ExtraLightItalic": require("./src/assets/fonts/Inter-ExtraLightItalic.otf"),
    "Inter-Italic": require("./src/assets/fonts/Inter-Italic.otf"),
    "Inter-Light": require("./src/assets/fonts/Inter-Light.otf"),
    "Inter-LightItalic": require("./src/assets/fonts/Inter-LightItalic.otf"),
    "Inter-Medium": require("./src/assets/fonts/Inter-Medium.otf"),
    "Inter-MediumItalic": require("./src/assets/fonts/Inter-MediumItalic.otf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.otf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.otf"),
    "Inter-SemiBoldItalic": require("./src/assets/fonts/Inter-SemiBoldItalic.otf"),
    "Inter-Thin": require("./src/assets/fonts/Inter-Thin.otf"),
    "Inter-ThinItalic": require("./src/assets/fonts/Inter-ThinItalic.otf"),
  });

  if (!fontsLoaded) return null;

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <SafeAreaProvider>
      <RealmProvider schema={schemas}>
        <NavigationContainer theme={navTheme}>
          <BottomTabNavigator tabRef={tabBarRef} />
        </NavigationContainer>
      </RealmProvider>
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
