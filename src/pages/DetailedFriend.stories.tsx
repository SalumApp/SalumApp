import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { DetailedFriend } from "./DetailedFriend";

const meta = {
  title: "Page/DetailedFriend",
  component: DetailedFriend,
  args: {
    friendName: "John Smith",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DetailedFriend>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
