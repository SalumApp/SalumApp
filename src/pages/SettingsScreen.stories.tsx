import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { SettingsScreen } from "./SettingsScreen";

const meta = {
  title: "Page/SettingsScreen",
  component: SettingsScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof SettingsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
