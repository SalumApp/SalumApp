import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";
import { getIcon } from "../utils/GlyphProvider";

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const iconMainColor = ThemeColor.s_blue["100"];
  const iconDangerColor = ThemeColor.s_red["100"];

  return (
    <View className="h-full bg-s_light-40 dark:bg-s_dark_navy-100">
      <SafeAreaInsetsView className="flex-col">
        <View className="ml-10 mt-5">
          <Text className="text-6xl font-medium dark:text-s_light-80">
            Options
          </Text>
        </View>
        <ScrollView>
          <View className="mx-12 mt-4 bg-s_light-100 border border-s_light-20 rounded-3xl dark:bg-s_dark_navy-75">
            <TouchableOpacity
              className="flex-row items-center h-28"
              onPress={() => navigation.navigate("manage category")}
            >
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Pie-chart", 35, 35, iconMainColor)}
              </View>
              <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
                Manage Categories
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Museum", 35, 35, iconMainColor)}
              </View>
              <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
                Manage Accounts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Contact", 35, 35, iconMainColor)}
              </View>
              <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
                Manage Friends
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Cloudy", 35, 35, iconMainColor)}
              </View>
              <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
                Backup & Sync
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Lock", 35, 35, iconMainColor)}
              </View>
              <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
                PIN and Biometrics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Settings", 35, 35, iconMainColor)}
              </View>
              <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
                Settings
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-3xl ml-10 mt-4 color-s_red-100">DANGER</Text>
          <View className="mx-10 mt-4 bg-s_light-100 border border-s_light-20 rounded-3xl dark:bg-s_dark_navy-75">
            <TouchableOpacity className="flex-row items-center h-28">
              <View className="bg-s_red-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                {getIcon("Trash", 35, 35, iconDangerColor)}
              </View>
              <Text className="text-xl font-medium ml-6 color-s_red-100">
                Erase Data & Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View className="h-60 flex-1" />
        </ScrollView>
      </SafeAreaInsetsView>
    </View>
  );
};
