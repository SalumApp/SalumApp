import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button, View, Text } from "react-native";

import IconPickerBottomSheet from "./IconPickerBottomSheet";
import { IconGlyph } from "../../assets/Glyph";

const meta: Meta = {
  title: "Sheets/IconPickerBottomSheet",
  component: IconPickerBottomSheet,
  args: {
    visible: false,
    onClose: () => {},
    onIconSelect: (icon: string) => {},
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
    onIconSelect: (icon: string) => {
      console.log("Selected icon:", icon);
    },
  },
  render: (args) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState("");
    /* eslint-enable react-hooks/rules-of-hooks */

    const handleClose = () => {
      setIsVisible(false);
      args.onClose();
    };

    const handleIconSelect = (icon: string) => {
      setSelectedIcon(icon);
      args.onIconSelect(icon);
      setIsVisible(false);
    };

    return (
      <View style={{ flex: 1 }}>
        <Button title="Open Icon Picker" onPress={() => setIsVisible(true)} />
        {selectedIcon !== "" && (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>Selected Icon:</Text>
            <IconGlyph glyph={selectedIcon} dim={32} fill="#000000" />
          </View>
        )}
        <IconPickerBottomSheet
          visible={isVisible}
          onClose={handleClose}
          onIconSelect={handleIconSelect}
        />
      </View>
    );
  },
};
