import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
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
// interface ThemeProps {
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
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
