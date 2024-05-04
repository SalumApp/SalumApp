import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { DetailedAccount } from "./DetailedAccount";

const meta = {
  title: "Page/DetailedAccount",
  component: DetailedAccount,
  args: {
    accountName: "Chase Checking",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DetailedAccount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
