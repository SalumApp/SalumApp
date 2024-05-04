import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery } from "@realm/react";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { jsonToCSV } from "react-native-csv";

import { IconGlyph } from "../assets/Glyph";
import { TopNav } from "../components/Navigation/TopNav";
import { Transaction } from "../models/Transaction";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const colorScheme = useColorScheme();
  const iconMainColor = ThemeColor.s_blue["100"];
  const transactions = useQuery(Transaction);

  const handleExportCSV = async () => {
    const dataArray: any[] = [];

    transactions.forEach((transaction) => {
      dataArray.push({
        id: transaction._id.toString(),
        title: transaction.title,
        category: transaction.category.title,
        date: transaction.datetime.toISOString(),
        amount:
          transaction.currency.getAmount(transaction.amount) *
          (transaction.isExpense ? -1 : 1),
        currency: transaction.currency.code,
        account: transaction.account.title,
      });
    });

    const filePath = FileSystem.cacheDirectory + "SalumExport.csv";
    await FileSystem.writeAsStringAsync(filePath, jsonToCSV(dataArray), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not available on your platform");
      await FileSystem.deleteAsync(filePath);
      return;
    }
    await Sharing.shareAsync(filePath, {
      UTI: "text/csv",
      mimeType: "text/csv",
    });
    await FileSystem.deleteAsync(filePath);
  };

  return (
    <SafeAreaInsetsView className="bg-s_light-40 dark:bg-s_dark_navy-100">
      <TopNav
        title="Options"
        titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        onLeftPress={() => navigation.navigate("home")}
        onRightPress={() => navigation.navigate("acknowledgements")}
      />

      <ScrollView className="h-full">
        <View className="h-10" />
        <View className="mx-12 mt-4 bg-s_light-100 border border-s_light-20 rounded-3xl dark:bg-s_dark_navy-75">
          <TouchableOpacity
            className="flex-row items-center h-28"
            onPress={() => navigation.navigate("manage category")}
          >
            <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
              <IconGlyph glyph="Pie-chart" dim={35} fill={iconMainColor} />
            </View>
            <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
              Manage Categories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row border-t border-gray-300 items-center h-28"
            onPress={() => navigation.navigate("manage account")}
          >
            <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
              <IconGlyph glyph="Museum" dim={35} fill={iconMainColor} />
            </View>
            <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
              Manage Accounts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row border-t border-gray-300 items-center h-28"
            onPress={() => navigation.navigate("manage currency")}
          >
            <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
              <IconGlyph glyph="Currency" dim={35} fill={iconMainColor} />
            </View>
            <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
              Manage Currency
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row border-t border-gray-300 items-center h-28"
            onPress={handleExportCSV}
          >
            <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
              <IconGlyph glyph="Upload-file" dim={35} fill={iconMainColor} />
            </View>
            <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
              Export to CSV
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row border-t border-gray-300 items-center h-28"
            onPress={() => navigation.navigate("import from csv")}
          >
            <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
              <IconGlyph glyph="Download-file" dim={35} fill={iconMainColor} />
            </View>
            <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
              Import from CSV
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row border-t border-gray-300 items-center h-28"
            onPress={() => navigation.navigate("backup sync")}
          >
            <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
              <IconGlyph glyph="Cloudy" dim={35} fill={iconMainColor} />
            </View>
            <Text className="text-xl font-medium ml-6 dark:text-s_light-80">
              Backup & Sync
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaInsetsView>
  );
};
