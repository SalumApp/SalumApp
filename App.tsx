import "react-native-gesture-handler";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import React, { useRef } from "react";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomTabNavigator from "./BottomTabNavigator";

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

function App() {
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
      <NavigationContainer theme={navTheme}>
        <BottomTabNavigator tabRef={tabBarRef} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
