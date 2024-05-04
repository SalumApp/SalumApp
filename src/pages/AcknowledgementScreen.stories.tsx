import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { AcknowledgementScreen } from "./AcknowledgementScreen";

const meta = {
  title: "Page/AcknowledgementScreen",
  component: AcknowledgementScreen,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof AcknowledgementScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
