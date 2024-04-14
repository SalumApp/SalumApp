import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NetWealthScreen } from "./NetWealthScreen";

const meta = {
  title: "Page/NetWealthScreen",
  component: NetWealthScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NetWealthScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
