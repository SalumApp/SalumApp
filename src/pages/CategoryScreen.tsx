import { NavigationProp, useNavigation } from "@react-navigation/native";
import "react-native-get-random-values";
import { useQuery } from "@realm/react";
import * as React from "react";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { Results } from "realm";

import { MyButton } from "../components/Button/Button";
import CategoryCard from "../components/Card/CategoryCard";
import { TopNav } from "../components/Navigation/TopNav";
import { Category } from "../models/Category";
import { addAlpha } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

interface CategorySegmentProps {
  segmentTitle: string;
  categoryList: Results<Category>;
  backgroundColor: string;
}

const CategorySegment: React.FC<CategorySegmentProps> = ({
  segmentTitle,
  categoryList,
  backgroundColor,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View className="m-4 py-4 rounded-3xl" style={{ backgroundColor }}>
      <Text className="pl-8 text-3xl font-semibold dark:text-s_light-80">
        {segmentTitle}
      </Text>
      {categoryList.map((category) => {
        return (
          <CategoryCard
            key={category.title}
            category={category}
            onPress={() => console.log("clicked")}
          />
        );
      })}
    </View>
  );
};

export const CategoryScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();

  const expenseCategories = useQuery(Category, (collection) => {
    return collection.filtered("isExpense == $0", true);
  });
  const incomeCategories = useQuery(Category, (collection) => {
    return collection.filtered("isExpense == $0", false);
  });

  return (
    <SafeAreaInsetsView className="absolute w-full h-full bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Categories"
        titleColor={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
        onLeftPress={() => navigation.navigate("settings")}
        onRightPress={() => console.log("Right")}
      />

      <ScrollView className="flex-1 mt-3">
        <CategorySegment
          segmentTitle="Expense"
          categoryList={expenseCategories}
          backgroundColor={addAlpha(ThemeColor.s_red["100"], 0.03)}
        />
        <CategorySegment
          segmentTitle="Income"
          categoryList={incomeCategories}
          backgroundColor={addAlpha(ThemeColor.s_green["100"], 0.03)}
        />
      </ScrollView>
      <View className="h-20 rounded-3xl">
        <MyButton
          onPress={() => console.log("Clicked")}
          text="Add a Category"
        />
      </View>
    </SafeAreaInsetsView>
  );
};

export default CategoryScreen;
