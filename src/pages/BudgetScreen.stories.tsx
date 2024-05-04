import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BudgetScreen } from "./BudgetScreen";

const meta = {
  title: "Page/BudgetScreen",
  component: BudgetScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof BudgetScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
