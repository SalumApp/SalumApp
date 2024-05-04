import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import RecommendationCard from "./RecommendationCard"; // Make sure the path to InputField is correct

const meta: Meta = {
  title: "Card/RecommendationCard",
  component: RecommendationCard,
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
  args: {},
};

// You can add more stories here if needed
