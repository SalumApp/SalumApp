import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import PinDots from "./PinDots";

const meta = {
  title: "Graph/PinDots",
  component: PinDots,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center items-center">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PinDots>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyPIN: Story = {
  args: {
    pinLength: 0,
  },
};

export const OneDigitPIN: Story = {
  args: {
    pinLength: 1,
  },
};

export const TwoDigitPIN: Story = {
  args: {
    pinLength: 2,
  },
};

export const ThreeDigitPIN: Story = {
  args: {
    pinLength: 3,
  },
};

export const FourDigitPIN: Story = {
  args: {
    pinLength: 4,
  },
};
