import { NavigationProp, useNavigation } from "@react-navigation/native";
import "react-native-get-random-values";
import { useQuery } from "@realm/react";
import * as React from "react";
import { useState } from "react";
import {
  Animated,
  Modal,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import { Results } from "realm";

import { MyButton } from "../components/Button/Button";
import { PillButtonInteractive } from "../components/Button/PillButtonInteractive";
import TransactionCard from "../components/Card/TransactionCard";
import DropdownMenuField from "../components/InputElements/DropdownMenuField";
import { TopNav } from "../components/Navigation/TopNav";
import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";
import { SafeAreaInsetsView } from "../utils/SafeArea";

const SORT_OPTIONS = {
  NEWEST: { field: "datetime", direction: true },
  OLDEST: { field: "datetime", direction: false },
  HIGHEST: { field: "amount", direction: true },
  LOWEST: { field: "amount", direction: false },
  AtoZ: { field: "title", direction: false },
  ZtoA: { field: "title", direction: true },
};

interface TransactionSegmentProps {
  segmentTitle: string;
  transactionList: Results<Transaction>;
}

function startOfDay(date: Date): Date {
  return new Date(date.setHours(0, 0, 0, 0));
}

function endOfDay(date: Date): Date {
  return new Date(date.setHours(23, 59, 59, 999));
}

const TransactionSegment: React.FC<TransactionSegmentProps> = ({
  segmentTitle,
  transactionList,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View className="mt-4">
      <Text className="pl-8 text-3xl font-semibold">{segmentTitle}</Text>
      {transactionList.map((transaction) => {
        return (
          <TransactionCard
            key={transaction._id.toString()}
            transactionTitle={transaction.title}
            transactionAmount={
              (transaction.amount / 100) * (transaction.isExpense ? -1 : 1)
            }
            transactionTime={transaction.datetime}
            categoryTitle={transaction.category.title}
            categoryGlyph={transaction.category.glyph}
            categoryColor={transaction.category.color}
            onPress={() =>
              navigation.navigate("transaction detail", {
                transactionId: transaction._id,
              })
            }
          />
        );
      })}
    </View>
  );
};

export const TransactionScreen = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [sortOption, setSortOption] = React.useState(SORT_OPTIONS.NEWEST);
  const [showExpense, setShowExpense] = React.useState(false);
  const [showIncome, setShowIncome] = React.useState(false);
  const [selectedMonth] = React.useState(null);
  const categories = useQuery(Category);
  const colorScheme = useColorScheme();

  const segmentList: TransactionSegmentProps[] = [];

  const transactions = useQuery(
    Transaction,
    (collection) => {
      let query = collection;

      if (selectedMonth) {
        const year = new Date().getFullYear();
        const startDateTime = new Date(year, selectedMonth - 1, 1).getTime();
        const endDateTime = new Date(year, selectedMonth, 0).getTime();
        query = query.filtered(
          "datetime >= $0 AND datetime <= $1",
          startDateTime,
          endDateTime,
        );
      }

      if (showIncome) {
        query = query.filtered("isExpense == $0", false);
      }

      if (showExpense) {
        query = query.filtered("isExpense == $0", true);
      }

      return query.sorted(sortOption.field, sortOption.direction);
    },
    [sortOption, showExpense, showIncome],
  );

  if (sortOption === SORT_OPTIONS.NEWEST) {
    const todayStart = startOfDay(new Date());
    const yesterdayStart = startOfDay(
      new Date(new Date().setDate(new Date().getDate() - 1)),
    );
    const yesterdayEnd = endOfDay(
      new Date(new Date().setDate(new Date().getDate() - 1)),
    );
    const last7DaysStart = startOfDay(
      new Date(new Date().setDate(new Date().getDate() - 7)),
    );
    const last7DaysEnd = endOfDay(
      new Date(new Date().setDate(new Date().getDate() - 2)),
    );

    // Today
    const todayList = transactions.filtered(
      "datetime >= $0",
      todayStart.getTime(),
    );
    if (todayList.length !== 0) {
      segmentList.push({
        segmentTitle: "Today",
        transactionList: todayList,
      });
    }

    // Yesterday
    const yesterdayList = transactions.filtered(
      "datetime >= $0 AND datetime <= $1",
      yesterdayStart.getTime(),
      yesterdayEnd.getTime(),
    );
    if (yesterdayList.length !== 0) {
      segmentList.push({
        segmentTitle: "Yesterday",
        transactionList: yesterdayList,
      });
    }

    // Last 7 Days
    const Last7DaysList = transactions.filtered(
      "datetime >= $0 AND datetime <= $1",
      last7DaysStart.getTime(),
      last7DaysEnd.getTime(),
    );
    if (Last7DaysList.length !== 0) {
      segmentList.push({
        segmentTitle: "Last 7 Days",
        transactionList: Last7DaysList,
      });
    }

    const restList = transactions.filtered(
      "datetime < $0",
      last7DaysStart.getTime(),
    );
    if (restList.length !== 0) {
      segmentList.push({
        segmentTitle: "Earlier",
        transactionList: restList,
      });
    }
  } else {
    if (transactions.length !== 0) {
      segmentList.push({
        segmentTitle: "All",
        transactionList: transactions,
      });
    }
  }

  const handleReset = () => {
    setSortOption(SORT_OPTIONS.NEWEST);
    setShowExpense(false);
    setShowIncome(false);
  };

  const handleExpense = () => {
    setShowExpense(!showExpense);
    setShowIncome(false);
  };

  const handleIncome = () => {
    setShowIncome(!showIncome);
    setShowExpense(false);
  };

  return (
    <>
      <SafeAreaInsetsView className="absolute w-full h-full bg-s_light-60 dark:bg-s_dark_navy-100">
        <TopNav
          title="Transactions"
          titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
          onLeftPress={() => console.log("Left")}
          onRightPress={() => setIsBottomSheetVisible(true)}
        />

        {transactions.length === 0 && (
          <View className="flex-1 items-center justify-center h-full">
            <Text className="flex-col text-2xl self-center align-middle">
              No Data
            </Text>
          </View>
        )}

        {transactions.length !== 0 && (
          <ScrollView className="flex-1 mt-3 mb-16">
            <View>
              {segmentList.map((segment, index) => {
                return (
                  <TransactionSegment
                    key={index}
                    segmentTitle={segment.segmentTitle}
                    transactionList={segment.transactionList}
                  />
                );
              })}
            </View>
          </ScrollView>
        )}
      </SafeAreaInsetsView>

      <Modal visible={isBottomSheetVisible} transparent animationType="slide">
        <TouchableWithoutFeedback
          onPress={() => setIsBottomSheetVisible(false)}
        >
          <View className="flex-1 bg-s_dark-100op justify-end">
            <Animated.View
              className="bg-s_light-100 rounded-t-3xl"
              style={{ maxHeight: "70%" }}
            >
              <View className="items-center py-2.5 pt-4">
                <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1" />
              </View>
              <ScrollView className="flex-col">
                <View className="flex-row px-6 pb-4 items-center justify-between">
                  <Text className="text-2xl font-medium">
                    Filter Transaction
                  </Text>
                  <PillButtonInteractive
                    onPress={handleReset}
                    isPressed={false}
                    text="Reset"
                    height={10}
                    width={24}
                    textSize="xl"
                  />
                </View>
                <Text className="text-2xl font-medium pb-4 px-6">
                  Filter By
                </Text>
                <View className="flex-row px-6 justify-between">
                  <PillButtonInteractive
                    onPress={handleIncome}
                    isPressed={showIncome}
                    text="Income"
                    height={16}
                    width={32}
                    textSize="xl"
                  />
                  <PillButtonInteractive
                    onPress={handleExpense}
                    isPressed={showExpense}
                    text="Expense"
                    height={16}
                    width={32}
                    textSize="xl"
                  />
                </View>
                <Text className="text-2xl font-medium pb-4 px-6 pt-4">
                  Sort By
                </Text>
                <View className="flex-row px-6 justify-between">
                  <View className="flex-col justify-between">
                    <PillButtonInteractive
                      onPress={() => setSortOption(SORT_OPTIONS.HIGHEST)}
                      isPressed={sortOption === SORT_OPTIONS.HIGHEST}
                      text="Highest"
                      height={16}
                      width={32}
                      textSize="xl"
                    />
                    <View className="h-4" />
                    <PillButtonInteractive
                      onPress={() => setSortOption(SORT_OPTIONS.LOWEST)}
                      isPressed={sortOption === SORT_OPTIONS.LOWEST}
                      text="Lowest"
                      height={16}
                      width={32}
                      textSize="xl"
                    />
                  </View>
                  <View className="flex-col justify-between">
                    <PillButtonInteractive
                      onPress={() => setSortOption(SORT_OPTIONS.NEWEST)}
                      isPressed={sortOption === SORT_OPTIONS.NEWEST}
                      text="Newest"
                      height={16}
                      width={32}
                      textSize="xl"
                    />
                    <PillButtonInteractive
                      onPress={() => setSortOption(SORT_OPTIONS.OLDEST)}
                      isPressed={sortOption === SORT_OPTIONS.OLDEST}
                      text="Oldest"
                      height={16}
                      width={32}
                      textSize="xl"
                    />
                  </View>
                  <View className="flex-col justify-between">
                    <PillButtonInteractive
                      onPress={() => setSortOption(SORT_OPTIONS.AtoZ)}
                      isPressed={sortOption === SORT_OPTIONS.AtoZ}
                      text="A-to-Z"
                      height={16}
                      width={32}
                      textSize="xl"
                    />
                    <PillButtonInteractive
                      onPress={() => setSortOption(SORT_OPTIONS.ZtoA)}
                      isPressed={sortOption === SORT_OPTIONS.ZtoA}
                      text="Z-to-A"
                      height={16}
                      width={32}
                      textSize="xl"
                    />
                  </View>
                </View>
                <Text className="text-2xl font-medium pb-4 px-6 pt-4">
                  Category
                </Text>
                <View className="mx-2">
                  <DropdownMenuField
                    options={categories.map((i) => i.title)}
                    placeholder="Category"
                    onValueChange={() => console.log("dummy")}
                  />
                </View>
                <View className="pb-8 pt-2">
                  <MyButton
                    onPress={() => setIsBottomSheetVisible(false)}
                    text="Apply"
                  />
                </View>
              </ScrollView>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default TransactionScreen;
