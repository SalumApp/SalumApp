import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { RadioButton } from "./Radio";

const meta = {
  title: "Control/RadioButton",
  component: RadioButton,
  args: {
    isSelected: true,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
