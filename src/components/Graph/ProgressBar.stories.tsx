import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";

import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Graph/ProgressBar",
  component: ProgressBar,
  args: {
    progress: 0.3,
    backgroundColor: `#F1F1FA`,
    highlightColor: `#00A86B`,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Text>ProgressBar</Text>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
