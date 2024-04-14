import { Slider, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

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
        minimumTrackTintColor="#0077ff"
        step={1}
        allowTouchTrack
        trackStyle={{
          height: 15,
          backgroundColor: "transparent",
          borderRadius: 9,
        }}
        thumbStyle={{
          height: 33,
          width: 40,
          backgroundColor: "transparent",
          alignItems: "center",
        }}
        thumbProps={{
          children: (
            <View className="bg-white" style={styles.label_out}>
              <View className="bg-primary" style={styles.label_in}>
                <Text
                  style={styles.labelText}
                >{`${Math.round(sliderValue / 100)}%`}</Text>
              </View>
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
  label_out: {
    borderRadius: 16,
    height: 32,
    width: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  label_in: {
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
