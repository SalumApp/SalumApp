import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { WealthScreen } from "./WealthScreen";

const meta = {
  title: "Page/WealthScreen",
  component: WealthScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof WealthScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
