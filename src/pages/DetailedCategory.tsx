// @ts-nocheck
import "react-native-get-random-values";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useObject, useRealm } from "@realm/react";
import * as React from "react";
import {
  ScrollView,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { UpdateMode } from "realm";

import { IconGlyph } from "../assets/Glyph";
import { MyButton } from "../components/Button/Button";
import { Toggle } from "../components/ControlElements/Toggle";
import { TopNav } from "../components/Navigation/TopNav";
import BottomSheetConfirmation from "../components/Sheet/BottomSheetConfirmation";
import ColorPickerBottomSheet from "../components/Sheet/ColorPickerBottomSheet";
import IconPickerBottomSheet from "../components/Sheet/IconPickerBottomSheet";
import { Category } from "../models/Category";
import { Transaction } from "../models/Transaction";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const DetailedCategory = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const realm = useRealm();
  const { categoryId } = route.params;
  const category = useObject(Category, categoryId);

  const [selectedColor, setSelectedColor] = React.useState(
    category ? category.color : "rgb(0, 119, 255)",
  );
  const [selectedIcon, setSelectedIcon] = React.useState(
    category ? category.glyph || "More" : null,
  );
  const [categoryName, setCategoryName] = React.useState(
    category ? category.title : null,
  );
  const [categoryDescription, setCategoryDescription] = React.useState(
    category ? category.description : null,
  );
  const [isExpense, setIsExpense] = React.useState(
    category ? category.isExpense : false,
  );
  const [isColorPickerVisible, setIsColorPickerVisible] = React.useState(false);
  const [isIconPickerVisible, setIsIconPickerVisible] = React.useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    React.useState(false);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setIsColorPickerVisible(false);
  };

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setIsIconPickerVisible(false);
  };

  const saveChanges = () => {
    realm.write(() => {
      realm.create(
        Category,
        {
          _id: categoryId,
          title: categoryName,
          color: selectedColor,
          glyph: selectedIcon,
          description: categoryDescription,
          hasBudget: category ? category.hasBudget : false,
          isExpense,
        },
        UpdateMode.Modified,
      );
    });
    navigation.goBack();
  };

  const handleCategoryDelete = () => {
    // TODO: move all related transactions
    category
      .linkingObjects<Transaction>("Transaction", "category")
      .forEach((trans) => {
        // realm.write(() => {
        //   trans.category =
        // });

        realm.write(() => {
          realm.delete(trans);
        });
      });

    realm.write(() => {
      realm.delete(category);
      navigation.goBack();
    });
  };

  return (
    <SafeAreaInsetsView
      topInsetColor={selectedColor}
      className="flex-1 bg-s_light-80 dark:bg-s_dark-100"
    >
      <TopNav
        title={category ? "Category Detail" : "New Category"}
        titleColor="#FFFFFF"
        bgColor={selectedColor}
        onLeftPress={() => navigation.goBack()}
        right={
          category ? (
            <TouchableOpacity
              onPress={() => setIsDeleteConfirmationVisible(true)}
              className="pr-5"
            >
              <IconGlyph glyph="Trash" dim={32} fill="#FFFFFF" />
            </TouchableOpacity>
          ) : (
            <View className="w-8" />
          )
        }
      />
      <View
        className="p-4 items-center justify-center rounded-b-3xl"
        style={{ backgroundColor: selectedColor }}
      >
        <TextInput
          className="text-4xl font-medium text-s_light-100 text-center"
          value={categoryName}
          onChangeText={setCategoryName}
          placeholder="Enter category name"
          placeholderTextColor="#FFFFFF"
          selectionColor="#FFFFFF"
        />
      </View>
      <ScrollView className="">
        <View className="items-center mt-8">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Icon
          </Text>
          <TouchableOpacity onPress={() => setIsIconPickerVisible(true)}>
            <IconGlyph
              glyph={selectedIcon}
              dim={150}
              fill={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
            />
          </TouchableOpacity>
        </View>

        <View className="mx-4 mt-8 items-center">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Category Color
          </Text>
        </View>

        <TouchableOpacity
          className="h-24 w-24 rounded-full self-center border-s_light-40 border-2 mt-3"
          style={{ backgroundColor: selectedColor }}
          onPress={() => setIsColorPickerVisible(true)}
        />
        <View className="mx-4 mt-8 items-center">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Expense
          </Text>
          <View>
            <Toggle
              onToggle={() => setIsExpense(!isExpense)}
              isEnabled={isExpense}
            />
          </View>
        </View>
        <View className="mx-4 mt-8 items-center">
          <Text className="text-3xl font-medium text-s_dark-100 dark:text-s_light-100 mb-4">
            Description
          </Text>
          <TextInput
            className="text-xl font-medium text-s_light-20 dark:text-s_light-20 mb-4 px-4 text-center"
            value={categoryDescription}
            onChangeText={setCategoryDescription}
            placeholder="Enter category description"
            placeholderTextColor="#A0A0A0"
            selectionColor="#A0A0A0"
            multiline
            numberOfLines={3}
          />
        </View>

        {/* Add other modifiable fields */}
      </ScrollView>
      <View className="h-20 mx-4 mb-8">
        <MyButton onPress={saveChanges} text="Save Changes" />
      </View>
      <ColorPickerBottomSheet
        visible={isColorPickerVisible}
        onClose={() => setIsColorPickerVisible(false)}
        onColorSelect={handleColorSelect}
      />
      <IconPickerBottomSheet
        visible={isIconPickerVisible}
        onClose={() => setIsIconPickerVisible(false)}
        onIconSelect={handleIconSelect}
      />
      <BottomSheetConfirmation
        visible={isDeleteConfirmationVisible}
        onClose={() => setIsDeleteConfirmationVisible(false)}
        title="Remove this category?"
        description="Are you sure do you want to remove this category?"
        onPressLeft={() => setIsDeleteConfirmationVisible(false)}
        onPressRight={handleCategoryDelete}
      />
    </SafeAreaInsetsView>
  );
};
