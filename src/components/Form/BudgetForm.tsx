import React, { useState } from "react";
import { Text, View } from "react-native";
import Realm from "realm";

import { Category } from "../../models/Category";
import { MyButton } from "../Button/Button";
import { SliderControl } from "../ControlElements/Slider";
import { Toggle } from "../ControlElements/Toggle";
import DropdownMenuField from "../InputElements/DropdownMenuField";
import BottomSheet from "../Sheet/BottomSheet";

interface BudgetFormProps {
  onConfirmation: () => void;
  onCategoryChange: (categoryObj: Category) => void;
  categories: Realm.Results<Category>;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  onConfirmation,
  onCategoryChange,
  categories,
}) => {
  const categoryOptions = categories.map((i) => i.title);
  const [, setSelectedCurrency] = React.useState("USD");
  const [isSliderToggled, setIsSliderToggled] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const currencies = [
    "USD",
    "EUR",
    "JPY",
    "GBP",
    "CNY",
    "AUD",
    "CAD",
    "CHF",
    "HKD",
    "TWD",
    "PLN",
  ];

  const onTogglePress = () => {
    setIsSliderToggled(!isSliderToggled);
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setIsBottomSheetVisible(false);
  };

  return (
    <>
      <View className="bg-s_light-80 absolute w-full bottom-0 rounded-t-3xl">
        <View className="pt-6" />
        <DropdownMenuField
          options={categoryOptions}
          placeholder="Category"
          onValueChange={(value: string) =>
            onCategoryChange(categories[categoryOptions.indexOf(value)])
          }
        />
        <View className="flex-row pt-10 mx-6 items-center justify-between">
          <View className="flex-col pb-6 w-1/2">
            <Text className="font-medium text-2xl">Receive Alert</Text>
            <Text className="color-s_light-20">
              Receive alert when it reaches some point.
            </Text>
          </View>
          <View>
            <Toggle onToggle={onTogglePress} isEnabled={isSliderToggled} />
          </View>
        </View>
        {isSliderToggled === true && (
          <View>
            <SliderControl />
          </View>
        )}
        <View className="h-20 mb-8">
          <MyButton onPress={onConfirmation} text="Continue" />
        </View>
      </View>
      <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        options={currencies}
        onOptionSelect={handleCurrencySelect}
      />
    </>
  );
};

export default BudgetForm;
