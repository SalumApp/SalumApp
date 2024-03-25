import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { View, Button } from "react-native";

import BottomSheet from "./BottomSheet";

const meta: Meta = {
  title: "Sheets/BottomSheet",
  component: BottomSheet,
  args: {
    visible: false,
    onClose: () => {},
    options: [],
    onOptionSelect: (option: string) => {},
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    visible: false,
    onClose: () => {},
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
      "Option 6",
      "Option 7",
      "Option 8",
      "Option 9",
      "Option 10",
      "Option 11",
    ],
    onOptionSelect: (option: string) => {
      console.log("Selected option:", option);
    },
  },
  render: (args) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [isVisible, setIsVisible] = useState(false);
    /* eslint-enable react-hooks/rules-of-hooks */

    const handleClose = () => {
      setIsVisible(false);
      args.onClose();
    };

    const handleOptionSelect = (option: string) => {
      args.onOptionSelect(option);
      setIsVisible(false);
    };

    return (
      <View style={{ flex: 1 }}>
        <Button title="Open Bottom Sheet" onPress={() => setIsVisible(true)} />
        <BottomSheet
          visible={isVisible}
          onClose={handleClose}
          options={args.options}
          onOptionSelect={handleOptionSelect}
        />
      </View>
    );
  },
};
