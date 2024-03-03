import { Slider, Text } from "@rneui/themed";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

type SliderControlProps = {
  initialValue?: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  onValueChange?: (value: number) => void;
};

export const SliderControl: React.FC<SliderControlProps> = ({
  initialValue = 0,
  step = 1,
  onValueChange,
}) => {
  const [sliderValue, setSliderValue] = useState(initialValue);

  return (
    <View style={[styles.contentView]}>
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        maximumValue={10000}
        minimumValue={0}
        minimumTrackTintColor="#00c828"
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: "transparent" }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
        thumbProps={{
          children: (
            <View className="bg-primary" style={styles.label}>
              <Text
                style={styles.labelText}
              >{`${Math.round(sliderValue / 100)}%`}</Text>
            </View>
          ),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  label: {
    position: "absolute",
    borderRadius: 12,
    height: 24,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    color: "white",
    fontSize: 12,
  },
});
