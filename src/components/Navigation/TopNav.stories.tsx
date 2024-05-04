import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { TopNav } from "./TopNav";

const meta = {
  title: "TopNav",
  component: TopNav,
  args: {
    title: "Notification",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TopNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
