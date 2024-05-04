import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button, View } from "react-native";

import ColorPickerBottomSheet from "./ColorPickerBottomSheet";

const meta: Meta = {
  title: "Sheets/ColorPickerBottomSheet",
  component: ColorPickerBottomSheet,
  args: {
    visible: false,
    onClose: () => {},
    onColorSelect: (color: string) => {},
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
    onColorSelect: (color: string) => {
      console.log("Selected color:", color);
    },
  },
  render: (args) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [isVisible, setIsVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState("");
    /* eslint-enable react-hooks/rules-of-hooks */

    const handleClose = () => {
      setIsVisible(false);
      args.onClose();
    };

    const handleColorSelect = (color: string) => {
      setSelectedColor(color);
      args.onColorSelect(color);
      setIsVisible(false);
    };

    return (
      <View style={{ flex: 1 }}>
        <Button title="Open Color Picker" onPress={() => setIsVisible(true)} />
        {selectedColor !== "" && (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: selectedColor,
              marginTop: 20,
            }}
          />
        )}
        <ColorPickerBottomSheet
          visible={isVisible}
          onClose={handleClose}
          onColorSelect={handleColorSelect}
        />
      </View>
    );
  },
};
