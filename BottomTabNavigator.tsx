import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";

import { ExpenseStackNavigator, IncomeStackNavigator } from "./StackNavigators";
import { AnimatedButton } from "./src/components/Button/AnimatedButton";
import { Home } from "./src/pages/Home";
import { TransactionScreen } from "./src/pages/TransactionScreen";

interface BottomTabProps {
  tabRef: React.MutableRefObject<any>;
}

interface NavProps {
  routeName: string;
  selectedTab: string;
  navigate: (name: any) => void;
}

const BottomTabNavigator = ({ tabRef }: BottomTabProps) => {
  const HomeScreen: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(true);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    // Your HomeScreen layout code here
    return <Home />;
  };

  const ExpenseScreen: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <ExpenseStackNavigator />;
  };

  const IncomeScreen: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <IncomeStackNavigator />;
  };

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon: any = "";

    switch (routeName) {
      case "home":
        icon = "home";
        break;
      case "title2":
        icon = "repeat-outline";
        break;
      case "title3":
        icon = "people-circle-outline";
        break;
      case "title4":
        icon = "wallet";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: NavProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const renderCir = ({ routeName, selectedTab, navigate }: NavProps) => {
    return (
      <View style={{ bottom: 20 }}>
        <AnimatedButton
          routeName={routeName}
          selectedTab={selectedTab}
          navigate={navigate}
        />
      </View>
    );
  };

  // const Screen1 = () => {
  //     tabBarRef.current?.setVisible(false);
  //     return <Expense onLeftPress={() => {console.log("left")}}/>;
  // };
  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      height={68}
      circleWidth={50}
      bgColor="white"
      initialRouteName="home"
      borderTopLeftRight
      renderCircle={renderCir}
      tabBar={renderTabBar}
      screenOptions={{ headerShown: false }}
      ref={tabRef}
    >
      <CurvedBottomBarExpo.Screen
        name="home"
        position="LEFT"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="title2"
        component={() => <TransactionScreen />}
        position="LEFT"
      />
      <CurvedBottomBarExpo.Screen
        name="expense"
        position="CIRCLE"
        component={() => <ExpenseScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="income"
        position="CIRCLE"
        component={() => <IncomeScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="title3"
        component={() => <HomeScreen />}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="title4"
        component={() => <HomeScreen />}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBar: {},
  tabbarItem: {
    paddingBottom: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigator;
