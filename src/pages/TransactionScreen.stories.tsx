import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { TransactionScreen } from "./TransactionScreen";

const meta = {
  title: "Page/TransactionScreen",
  component: TransactionScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof TransactionScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
