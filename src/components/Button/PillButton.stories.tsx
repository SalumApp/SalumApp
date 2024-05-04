import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { PillButton } from "./PillButton";

const meta = {
  title: "Button/PillButton",
  component: PillButton,
  args: {
    text: "March",
    glyph: "arrow-down",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PillButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
