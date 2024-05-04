import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import TransactionCard from "./TransactionCard"; // Make sure the path to InputField is correct

const meta: Meta = {
  title: "Card/TransactionCard",
  component: TransactionCard,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        {
          name: "white",
          value: "#FFFFFF",
        },
        {
          name: "black",
          value: "#000000",
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // You can define props here if InputField accepts any
    // Since InputField manages its own state, we don't need initial args
    transactionTitle: "Target Run",
    transactionAmount: -89.64,
    transactionTime: 1710614000,
    categoryTitle: "Grocery",
    categoryColorR: 238,
    categoryColorG: 165,
    categoryColorB: 25,
  },
};

// You can add more stories here if needed
