import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ImportTransaction } from "./ImportTransaction";

const meta = {
  title: "Page/ImportTransaction",
  component: ImportTransaction,
  decorators: [(Story) => <Story />],
  args: {
    csvColumnTitles: ["a", "b", "c"],
  },
} satisfies Meta<typeof ImportTransaction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
