import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { AnimatedButton } from "./AnimatedButton";

const meta = {
  title: "Button/AnimatedButton",
  component: AnimatedButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AnimatedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
