import { TouchableOpacity, View } from "react-native";

interface ToggleProps {
  onToggle: () => void;
  isEnabled: boolean;
}

export const Toggle = ({ onToggle, isEnabled }: ToggleProps) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      className={`w-14 h-8 flex-row items-center rounded-full p-1 ${isEnabled ? "bg-primary dark:bg-s_blue-dark-75" : "bg-secondary dark:bg-s_dark-75"}`}
    >
      <View
        className={`w-6 h-6 bg-s_light-100 dark:bg-s_dark-25 rounded-full transform ${isEnabled ? "translate-x-6" : "translate-x-0"}`}
      />
    </TouchableOpacity>
  );
};
