import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import PinInput from "./PinInputPage";

const meta = {
  title: "Page/PinInput",
  component: PinInput,
  decorators: [
    (Story) => (
      <View className="flex-1">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PinInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
