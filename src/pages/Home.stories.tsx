import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Home } from "./Home";

const meta = {
  title: "Page/HomeScreen",
  component: Home,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
