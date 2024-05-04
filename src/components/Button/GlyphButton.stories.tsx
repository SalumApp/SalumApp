import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { GlyphButton } from "./GlyphButton";

const meta = {
  title: "Button/GlyphButton",
  component: GlyphButton,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof GlyphButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
