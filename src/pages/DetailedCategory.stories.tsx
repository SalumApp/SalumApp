import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { DetailedCategory } from "./DetailedCategory";

const meta = {
  title: "Page/DetailedCategory",
  component: DetailedCategory,
  args: {
    categoryTitle: "Shopping",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DetailedCategory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
