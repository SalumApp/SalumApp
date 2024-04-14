import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { PillToggleTwoElem } from "./PillToggleTwoElem";

const meta = {
  title: "Control/PillToggleTwoElem",
  component: PillToggleTwoElem,
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
} satisfies Meta<typeof PillToggleTwoElem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
