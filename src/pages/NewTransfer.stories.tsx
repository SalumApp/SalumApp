import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NewTransfer } from "./NewTransfer";

const meta = {
  title: "Page/NewTransferScreen",
  component: NewTransfer,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NewTransfer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
