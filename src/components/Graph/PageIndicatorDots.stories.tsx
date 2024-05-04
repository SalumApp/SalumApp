import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import PageIndicatorDots from "./PageIndicatorDots";

const meta = {
  title: "Graph/PageIndicatorDots",
  component: PageIndicatorDots,
  decorators: [
    (Story) => (
      <View className="flex-1 justify-center items-center">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PageIndicatorDots>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Page1: Story = {
  args: {
    currentPage: 0,
    totalPages: 4,
  },
};

export const Page2: Story = {
  args: {
    currentPage: 1,
    totalPages: 4,
  },
};

export const Page3: Story = {
  args: {
    currentPage: 2,
    totalPages: 4,
  },
};

export const Page4: Story = {
  args: {
    currentPage: 3,
    totalPages: 4,
  },
};
