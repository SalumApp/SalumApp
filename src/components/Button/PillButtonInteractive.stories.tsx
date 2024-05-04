import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { PillButtonInteractive } from "./PillButtonInteractive";

const meta = {
  title: "Button/PillButtonInteractive",
  component: PillButtonInteractive,
  args: {
    text: "March",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PillButtonInteractive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
