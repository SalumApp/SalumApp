import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ManageAccountsScreen } from "./ManageAccountsScreen";

const meta = {
  title: "Page/ManageAccountsScreen",
  component: ManageAccountsScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ManageAccountsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
