import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { CloudOptionsScreen } from "./CloudOptionsScreen";

const meta = {
  title: "Page/CloudOptionsScreen",
  component: CloudOptionsScreen,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof CloudOptionsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
