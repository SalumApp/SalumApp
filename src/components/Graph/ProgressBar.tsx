import React from "react";
import { View } from "react-native";

type ProgressBarProps = {
  progress: number; // value between 0 and 1
  backgroundColor: string;
  highlightColor: string;
};

export const ProgressBar = ({
  progress,
  backgroundColor,
  highlightColor,
}: ProgressBarProps) => {
  // Ensure progress is between 0 and 1
  const actualProgress = Math.max(0, Math.min(1, progress)) * 100;
  // bg-[${backgroundColor.toUpperCase()}]
  // bg-[${highlightColor.toUpperCase()}]
  return (
    <View
      className="h-8 rounded-full overflow-hidden"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <View
        className="h-full rounded-full"
        style={{
          width: `${actualProgress}%`,
          backgroundColor: `${highlightColor}`,
        }}
      />
    </View>
  );
};
