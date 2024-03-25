import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NewTransaction } from "./NewTransaction";

const meta = {
  title: "Page/NewTransactionScreen",
  component: NewTransaction,
  args: {
    transactionType: "expense",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NewTransaction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
