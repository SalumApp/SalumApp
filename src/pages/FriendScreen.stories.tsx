import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { FriendScreen } from "./FriendScreen";

const meta = {
  title: "Page/FriendScreen",
  component: FriendScreen,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof FriendScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
