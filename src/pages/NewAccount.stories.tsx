import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NewAccount } from "./NewAccount";

const meta = {
  title: "Page/NewAccountScreen1",
  component: NewAccount,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NewAccount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
