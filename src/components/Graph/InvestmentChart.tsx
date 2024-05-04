import { useObject, useQuery } from "@realm/react";
import * as React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import { Asset } from "../../models/Asset";
import { Currency } from "../../models/Currency";
import { mainCurrency } from "../../utils/Config";

interface InvestmentChartProps {
  chartDate: number;
}

export const InvestmentChart = ({ chartDate }: InvestmentChartProps) => {
  const allAssets = useQuery(Asset);
  const baseCurrency = useObject(Currency, mainCurrency);
  const [lineData, setLineData] = useState(null);

  React.useEffect(() => {
    const calculateValues = () => {
      const combinedResult: any[] = [];

      allAssets.forEach((asset, assetIdx) => {
        console.log(asset.combineDataForLastNDays(chartDate));
        asset.combineDataForLastNDays(chartDate).forEach((x, entryIdx) => {
          if (assetIdx === 0) {
            combinedResult.push({
              value: asset.currency.convertToFcy(baseCurrency, x.value),
              date: new Date(x.date).toLocaleDateString(),
            });
          } else {
            // console.error(combinedResult[entryIdx]);
            // console.error(x, entryIdx);
            combinedResult[entryIdx].value += x.value;
          }
        });
      });
      setLineData(combinedResult);
    };

    calculateValues();
  }, [allAssets, chartDate]);

  return (
    <LineChart
      areaChart
      hideRules
      adjustToWidth
      data={lineData}
      rotateLabel
      noOfSections={5}
      hideDataPoints
      disableScroll
      color="#00ff83"
      thickness={2}
      startFillColor="rgba(20,105,81,0.3)"
      endFillColor="rgba(20,85,81,0.01)"
      startOpacity={0.9}
      endOpacity={0}
      initialSpacing={0}
      yAxisLabelWidth={0}
      hideAxesAndRules
      yAxisThickness={0}
      pointerConfig={{
        pointerStripColor: "lightgray",
        pointerStripWidth: 2,
        pointerColor: "lightgray",
        radius: 8,
        pointerLabelWidth: 150,
        pointerLabelHeight: 90,
        activatePointersOnLongPress: true,
        autoAdjustPointerLabelPosition: true,
        pointerLabelComponent: (items: any[]) => {
          return (
            <View className="justify-center">
              <View className="px-3.5 py-1.5 rounded-2xl bg-white">
                <Text className="text-xl mb-1 text-center">
                  {items[0].date}
                </Text>
                <Text className="text-xl font-bold text-center">
                  {baseCurrency.symbol}
                  {baseCurrency.getAmountString(items[0].value * 100, 5)}
                </Text>
              </View>
            </View>
          );
        },
      }}
    />
  );
};
