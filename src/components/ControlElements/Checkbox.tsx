import React from "react";
import { TouchableOpacity } from "react-native";

import UncheckedSvg from "../../assets/GlyphProvider/glyph/User Interface/Glyph/checkbox-blank.svg";
import CheckedSvg from "../../assets/GlyphProvider/glyph/User Interface/Glyph/checkbox.svg";

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
        <CheckedSvg width={120} height={40} fill={fillColorLight} />
      ) : (
        <UncheckedSvg width={120} height={40} fill={fillColorLight} />
      )}
    </TouchableOpacity>
  );
};
