import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { SpendingBar } from "./SpendingBar";

const meta = {
  title: "Graph/SpendingBar",
  component: SpendingBar,
  args: {
    titleString: "Expenses",
    moneyColor: "text-red-500",
    categoriesSpendingAmount: [4, 6, 7],
    colorsSpendingCategory: ["orange", "purple", "red"],
    totalBarWidth: 300, // Default width of the bar
    categoriesNames: ["Shopping", "Recurring", "Dining"],
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SpendingBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
