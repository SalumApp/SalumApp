import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";

import { MyButton } from "../components/Button/Button";
import { BudgetList } from "../components/List/BudgetList";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const BudgetScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_blue-100">
      <View className="h-4/5 bg-s_light-60 absolute w-full bottom-0 rounded-t-3xl">
        <ScrollView>
          <View className="pt-2" />
          <BudgetList />
        </ScrollView>
        <View className="h-20 mb-36">
          <MyButton
            onPress={() => navigation.navigate("new budget")}
            text="Create a Budget"
          />
        </View>
      </View>
    </SafeAreaInsetsView>
  );
};
