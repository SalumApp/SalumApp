import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NewAccount2 } from "./NewAccount2";

const meta = {
  title: "Page/NewAccountScreen2",
  component: NewAccount2,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NewAccount2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
