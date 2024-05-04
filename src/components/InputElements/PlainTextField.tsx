import React from "react";
import { TextInput } from "react-native";

interface PlainTextFieldProp {
  placeholder: string;
  className?: string;
  [key: string]: any;
}

const PlainTextField = ({
  placeholder = "Input...",
  className,
  ...props
}: PlainTextFieldProp) => {
  return (
    <TextInput
      className={
        className ||
        "min-h-20 bg-white dark:bg-s_dark-75 dark:text-s_light-80 border border-gray-300 rounded-3xl px-4 text-2xl"
      }
      placeholder={placeholder ?? "Input..."}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
};

export default PlainTextField;
