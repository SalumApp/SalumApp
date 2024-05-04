import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import OnboardingPage from "./OnboardingPage";

const meta = {
  title: "Page/OnboardingPage",
  component: OnboardingPage,
  decorators: [
    (Story) => (
      <View className="flex-1">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof OnboardingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
