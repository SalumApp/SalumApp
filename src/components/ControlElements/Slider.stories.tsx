import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { SliderControl } from "./Slider";

const meta = {
  title: "Control/Slider",
  component: SliderControl,
  args: {
    initialValue: 50,
    minimumValue: 0,
    maximumValue: 100,
    step: 1,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SliderControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
