import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NewBudgetScreen } from "./NewBudgetScreen";

const meta = {
  title: "Page/NewBudgetScreen",
  component: NewBudgetScreen,
  args: {
    categDropdownOptions: ["categ 0", "categ 1"],
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NewBudgetScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
