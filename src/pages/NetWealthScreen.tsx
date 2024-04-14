import * as React from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import { PillButton } from "../components/Button/PillButton";
import { PillToggleTwoElem } from "../components/ControlElements/PillToggleTwoElem";
import { formatCurrency } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface NetWealthScreenProps {
  timePillText: string;
}

export const NetWealthScreen = ({
  timePillText = "Month",
}: NetWealthScreenProps) => {
  let netWorth = 0;
  const [isAssetEnabled, setIsAssetEnabled] = React.useState(true);

  const lineData = [
    { value: 20 },
    { value: 40 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
  ];

  const calcNetWorth = (netWorth: number) => {
    netWorth = 100;
    return netWorth;
  };

  const onPressTimePill = () => {
    // Handle pill button press
  };

  netWorth = calcNetWorth(netWorth);

  const onAssetToggle = () => {
    setIsAssetEnabled(!isAssetEnabled);
  };

  const onFilterPress = (isAsset = false) => {
    // Handle filter button press
  };

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_light-80">
      <View className="top-0 items-center w-full">
        <Text className="font-medium text-3xl color-s_dark-100">
          Net Wealth Report
        </Text>
      </View>
      <View className="flex-row mx-4 mt-3 items-center">
        <PillButton
          onPress={onPressTimePill}
          text={timePillText}
          glyph="Dropdown"
        />
        <View className="flex-1 items-end right-0">
          <Text className="font-bold text-4xl">
            {formatCurrency(netWorth, "USD")}
          </Text>
        </View>
      </View>
      <View className="mx-4 -mt-10">
        <LineChart
          areaChart
          hideDataPoints
          disableScroll
          startFillColor="#0077FF"
          startOpacity={1}
          endOpacity={0}
          initialSpacing={0}
          data={lineData}
          curved
          thickness={5}
          hideRules
          hideYAxisText
          yAxisColor="transparent"
          xAxisColor="transparent"
          color="#0077FF"
          adjustToWidth
        />
      </View>
      <View className="w-11/12 self-center">
        <PillToggleTwoElem
          onToggle={onAssetToggle}
          isEnabled={isAssetEnabled}
          optionsToggle={["Asset", "Liability"]}
        />
      </View>
      {!isAssetEnabled ? (
        <View className="mt-4">
          <View className="flex-row justify-between items-center mx-4">
            <PillButton
              onPress={() => onFilterPress(true)}
              text="Filter"
              glyph="Filter"
            />
            <View className="w-8 h-8">
              {/* Replace with your SVG icon */}
              <Text>SVG</Text>
            </View>
          </View>
          <View className="mx-4 mt-2">
            <Text className="font-medium text-xl color-s_dark-100">Assets</Text>
          </View>
        </View>
      ) : (
        <View className="mt-4">
          <View className="flex-row justify-between items-center mx-4">
            <PillButton
              onPress={() => onFilterPress(false)}
              text="Filter"
              glyph="Filter"
            />
            <View className="w-8 h-8">
              {/* Replace with your SVG icon */}
              <Text>SVG</Text>
            </View>
          </View>
          <View className="mx-4 mt-2">
            <Text className="font-medium text-xl color-s_dark-100">
              Liabilities
            </Text>
          </View>
        </View>
      )}
    </SafeAreaInsetsView>
  );
};
