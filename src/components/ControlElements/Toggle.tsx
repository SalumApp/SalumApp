import { TouchableOpacity, View } from "react-native";

interface ToggleProps {
  onToggle: () => void;
  isEnabled: boolean;
}

export const Toggle = ({ onToggle, isEnabled }: ToggleProps) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      className={`w-14 h-8 flex-row items-center rounded-full p-1 ${isEnabled ? "bg-primary" : "bg-secondary"}`}
    >
      <View
        className={`w-6 h-6 bg-white rounded-full transform ${isEnabled ? "translate-x-6" : "translate-x-0"}`}
      />
    </TouchableOpacity>
  );
};
