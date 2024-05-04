import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";

import {
  NetWealthStackNavigator,
  SettingsStackNavigator,
} from "./StackNavigators";
import { IconGlyph } from "./src/assets/Glyph";
import { AnimatedButton } from "./src/components/Button/AnimatedButton";
import { BudgetScreen } from "./src/pages/BudgetScreen";
import { DetailedFriend } from "./src/pages/DetailedFriend";
import { DetailedTransaction } from "./src/pages/DetailedTransaction";
import FriendScreen from "./src/pages/FriendScreen";
import { Home } from "./src/pages/Home";
import { NewBudgetScreen } from "./src/pages/NewBudgetScreen";
import { NewTransaction } from "./src/pages/NewTransaction";
import { NewTransfer } from "./src/pages/NewTransfer";
import { TransactionScreen } from "./src/pages/TransactionScreen";
import { ThemeColor } from "./src/utils/Theme";

interface BottomTabProps {
  tabRef: React.MutableRefObject<any>;
}

interface NavProps {
  routeName: string;
  selectedTab: string;
  navigate: (name: any) => void;
}

const BottomTabNavigator = ({ tabRef }: BottomTabProps) => {
  const colorScheme = useColorScheme();
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

  const Transaction: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(true);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <TransactionScreen />;
  };

  const Budget: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(true);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <BudgetScreen />;
  };

  const Split: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(true);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <FriendScreen />;
  };

  const SplitDetail: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <DetailedFriend />;
  };

  const Settings: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <SettingsStackNavigator />;
  };

  const NewBudget: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <NewBudgetScreen />;
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

    return <NewTransaction transactionType="expense" />;
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

    return <NewTransaction transactionType="income" />;
  };

  const TransferScreen: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <NewTransfer />;
  };

  const TransactionDetailScreen: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <DetailedTransaction />;
  };

  const NetWealthStackScreen: React.FC = () => {
    useFocusEffect(
      React.useCallback(() => {
        // Function to be called when screen is focused
        tabRef.current?.setVisible(false);
        return () => {
          // Optional cleanup if needed when screen loses focus
        };
      }, []),
    );

    return <NetWealthStackNavigator />;
  };

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let IconComponent: any = null;
    let iconStyle = {};

    switch (routeName) {
      case "home":
        IconComponent = "Home";
        break;
      case "transaction":
        IconComponent = "Transaction";
        iconStyle = { paddingRight: 40 }; // Add padding to the right
        break;
      case "budget":
        IconComponent = "Pie-chart";
        iconStyle = { paddingLeft: 40 }; // Add padding to the left
        break;
      case "split":
        IconComponent = "Meeting";
        break;
    }

    return (
      <View style={iconStyle}>
        <IconGlyph
          glyph={IconComponent}
          dim={25}
          fill={routeName === selectedTab ? "#0077FF" : "#C6C6C6"}
        />
      </View>
    );
  };

  const renderCir = ({ routeName, selectedTab, navigate }: NavProps) => {
    return (
      <View style={{ bottom: 20, zIndex: 1 }}>
        <AnimatedButton
          routeName={routeName}
          selectedTab={selectedTab}
          navigate={navigate}
        />
      </View>
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }: NavProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        className="justify-center pb-3 flex-1 items-center"
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      height={68}
      circleWidth={50}
      bgColor={colorScheme === "dark" ? ThemeColor.s_dark["75"] : "white"}
      circlePosition="CENTER"
      initialRouteName="home"
      borderTopLeftRight
      tabBar={renderTabBar}
      renderCircle={renderCir}
      screenOptions={{ headerShown: false }}
      ref={tabRef}
    >
      <CurvedBottomBarExpo.Screen
        name="home"
        position="LEFT"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="transaction"
        component={() => <Transaction />}
        position="LEFT"
      />
      <CurvedBottomBarExpo.Screen
        name="budget"
        component={() => <Budget />}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="split"
        component={() => <Split />}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="settings"
        component={() => <Settings />}
        position="CIRCLE"
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
        name="transfer"
        position="CIRCLE"
        component={() => <TransferScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="new budget"
        position="CIRCLE"
        component={() => <NewBudget />}
      />
      <CurvedBottomBarExpo.Screen
        name="transaction detail"
        position="CIRCLE"
        component={() => <TransactionDetailScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="net wealth stack"
        position="CIRCLE"
        component={() => <NetWealthStackScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name="friend detail"
        position="CIRCLE"
        component={() => <SplitDetail />}
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

export default BottomTabNavigator;
