import React from "react";
import {
  Animated,
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
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-s_dark-100op justify-end">
          <Animated.View
            className="bg-s_light-100 rounded-t-3xl"
            style={{
              maxHeight: "50%",
            }}
          >
            <View className="items-center py-2.5 pt-4">
              <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1" />
            </View>
            <ScrollView>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => onOptionSelect(option)}
                >
                  <Text className="p-5 text-xl">{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomSheet;
