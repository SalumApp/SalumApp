import { BlurView } from "expo-blur";
import React from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  options: string[];
  onOptionSelect: (option: string) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  options,
  onOptionSelect,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={100} tint="dark" className="flex-1">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <View
          className="bg-s_light-100 dark:bg-s_dark-100 pb-10 rounded-t-3xl overflow-hidden"
          style={{ maxHeight: "70%" }}
        >
          <View className="items-center py-2.5 pt-4">
            <View className="w-16 h-1.5 bg-s_light-20 rounded-t-3xl mt-1" />
          </View>
          <ScrollView>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => onOptionSelect(option)}
              >
                <Text className="p-5 text-xl dark:text-s_light-100 font-medium">
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </BlurView>
    </Modal>
  );
};

export default BottomSheet;
