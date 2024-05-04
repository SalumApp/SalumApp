import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { Toggle } from "./Toggle";

const meta = {
  title: "Control/Toggle",
  component: Toggle,
  args: {
    isEnabled: true,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
