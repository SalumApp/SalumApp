import { BlurView } from "expo-blur";
import React from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";

import { MyButton } from "../Button/Button";

interface BottomSheetConfirmationProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onPressLeft: () => void;
  leftButtonColor?: string;
  leftButtonTextColor?: string;
  leftButtonText?: string;
  onPressRight: () => void;
  rightButtonColor?: string;
  rightButtonTextColor?: string;
  rightButtonText?: string;
}

const BottomSheetConfirmation: React.FC<BottomSheetConfirmationProps> = ({
  visible,
  onClose,
  title,
  description,
  onPressLeft,
  leftButtonColor = "bg-s_light-40 dark:bg-s_dark-25",
  leftButtonTextColor = "s_dark-100 dark:text-s_light-100",
  leftButtonText = "No",
  onPressRight,
  rightButtonColor = "bg-s_red-100 dark:bg-s_red-dark",
  rightButtonTextColor = "s_light-100",
  rightButtonText = "Yes",
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={100} tint="dark" className="flex-1">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <View className="pb-8 bg-s_light-100 dark:bg-s_dark-100 rounded-t-3xl">
          <View className="items-center py-2.5 pt-4">
            <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1 mb-2" />
          </View>
          <View className="items-center mb-3">
            <Text className="font-medium text-3xl dark:text-s_light-100">
              {title}
            </Text>
          </View>
          <View className="items-center mb-5 mx-5">
            <Text className="font-medium text-2xl text-s_light-20 text-center">
              {description}
            </Text>
          </View>
          <View>
            <View className="flex-row mb-4 mx-4 justify-between items-center">
              <View className="h-20 flex-1 mr-1">
                <MyButton
                  text={leftButtonText}
                  color={leftButtonColor}
                  textColor={leftButtonTextColor}
                  onPress={onPressLeft}
                />
              </View>
              <View className="h-20 flex-1 ml-1">
                <MyButton
                  text={rightButtonText}
                  color={rightButtonColor}
                  textColor={rightButtonTextColor}
                  onPress={onPressRight}
                />
              </View>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default BottomSheetConfirmation;
