import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import TransactionList from "./TransactionList";

const meta: Meta = {
  title: "List/TransactionList",
  component: TransactionList,
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
  },
};

// You can add more stories here if needed
