import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { DetailedTransaction } from "./DetailedTransaction";

const meta = {
  title: "Page/DetailedTransaction",
  component: DetailedTransaction,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DetailedTransaction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
