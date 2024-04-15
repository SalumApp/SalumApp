import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeAreaViewInsetsProps {
  topInsetColor?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  className?: string; // Accept className prop
  [key: string]: any; // Allow any other props
}

export const SafeAreaInsetsView: React.FC<SafeAreaViewInsetsProps> = ({
  topInsetColor,
  style,
  children,
  className,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  const defaultStyle: ViewStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <>
      <View
        style={[defaultStyle, style]}
        className={className || "absolute flex-1 w-full h-full"}
        {...props}
      >
        {children}
      </View>

      {topInsetColor && (
        <View
          style={{
            height: insets.top,
            width: "100%",
            backgroundColor: topInsetColor,
            position: "absolute",
          }}
        />
      )}
    </>
  );
};
