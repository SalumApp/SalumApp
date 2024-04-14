import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { NewAccount1 } from "./NewAccount1";

const meta = {
  title: "Page/NewAccountScreen1",
  component: NewAccount1,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof NewAccount1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
