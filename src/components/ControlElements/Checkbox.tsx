import React from "react";
import { TouchableOpacity } from "react-native";

import { IconGlyph } from "../../assets/Glyph";

interface CheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
  theme: "light" | "dark" | "colorBlindLight" | "colorBlindDark";
}

const colorSchemes = {
  light: "#0077FF",
  dark: "#0077FF",
  colorBlindLight: "#FF8800",
  colorBlindDark: "#FF8800",
};

export const Checkbox = ({ isChecked, onToggle, theme }: CheckboxProps) => {
  const fillColorLight = colorSchemes[theme] || colorSchemes.light;

  return (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center">
      {isChecked ? (
        <IconGlyph glyph="Checkbox" dim={40} fill={fillColorLight} />
      ) : (
        <IconGlyph glyph="Checkbox-blank" dim={40} fill={fillColorLight} />
      )}
    </TouchableOpacity>
  );
};
