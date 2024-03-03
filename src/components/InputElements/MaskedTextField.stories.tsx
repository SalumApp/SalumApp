import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import MaskedTextField from "./MaskedTextField"; // Make sure the path to InputField is correct

const meta: Meta = {
  title: "Input/MaskedTextField",
  component: MaskedTextField,
  args: {
    customPlaceholder: "Input...",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // You can define props here if InputField accepts any
    // Since InputField manages its own state, we don't need initial args
  },
};

// You can add more stories here if needed
