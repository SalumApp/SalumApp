import React from "react";
import { Platform, View, KeyboardAvoidingView } from "react-native";
import Realm from "realm";

import { Category } from "../../models/Category";
import { MyButton } from "../Button/Button";
import DropdownMenuField from "../InputElements/DropdownMenuField";

interface BudgetFormProps {
  onConfirmation: () => void;
  onCategoryChange: (categoryObj: Category) => void;
  currentCategorySelection: string;
  categories: Realm.Results<Category>;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  onConfirmation,
  onCategoryChange,
  categories,
  currentCategorySelection,
}) => {
  const categoryOptions = categories.map((i) => i.title);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1" />
      <View className="bg-s_light-100 dark:bg-s_dark-100 w-full rounded-t-3xl">
        <View className="pt-8" />
        <DropdownMenuField
          options={categoryOptions}
          placeHolder="Category"
          onValueChange={(value: string) =>
            onCategoryChange(categories[categoryOptions.indexOf(value)])
          }
          currentSelection={currentCategorySelection}
        />
        <View className="h-20 mb-20 mt-6">
          <MyButton onPress={onConfirmation} text="Continue" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BudgetForm;
