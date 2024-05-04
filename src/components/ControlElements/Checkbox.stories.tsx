import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Control/Checkbox",
  component: Checkbox,
  args: {
    isChecked: true,
    theme: "light",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
