import { NavigationProp, useNavigation } from "@react-navigation/native";
import "react-native-get-random-values";
import { useQuery } from "@realm/react";
import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import CategoryCard from "../components/Card/CategoryCard";
import { TopNav } from "../components/Navigation/TopNav";
import { Category } from "../models/Category";
import { addAlpha } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

interface CategorySegmentProps {
  segmentTitle: string;
  categoryList: Realm.Results<Category>;
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
            onPress={() =>
              navigation.navigate("category detail", {
                categoryId: category._id,
              })
            }
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
    return collection.filtered(
      "title != $0 && isExpense == $1",
      "Uncategorized",
      true,
    );
  });
  const incomeCategories = useQuery(Category, (collection) => {
    return collection.filtered(
      "title != $0 && isExpense == $1",
      "Uncategorized",
      false,
    );
  });

  const titleColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <SafeAreaInsetsView className="absolute w-full h-full bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Categories"
        titleColor={titleColor}
        left={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="pl-5"
          >
            <IconGlyph glyph="Arrow-left" dim={32} fill={titleColor} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("category detail", {
                categoryId: new Realm.BSON.UUID(),
              })
            }
            className="pl-1 pr-5"
          >
            <IconGlyph glyph="Plus" dim={24} fill={titleColor} />
          </TouchableOpacity>
        }
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
    </SafeAreaInsetsView>
  );
};
