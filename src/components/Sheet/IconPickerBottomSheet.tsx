import { BlurView } from "expo-blur";
import React from "react";
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from "react-native";

import { IconGlyph, iconMappingsPicker } from "../../assets/Glyph";

interface IconPickerBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onIconSelect: (icon: string) => void;
}

const ICON_GLYPHS = Object.keys(iconMappingsPicker);

const IconPickerBottomSheet: React.FC<IconPickerBottomSheetProps> = ({
  visible,
  onClose,
  onIconSelect,
}) => {
  const colorScheme = useColorScheme();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={100} tint="dark" className="flex-1">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <View
          className="bg-s_light-100 dark:bg-s_dark-100 rounded-t-3xl overflow-hidden"
          style={{ maxHeight: "50%" }}
        >
          <View className="items-center py-2.5 pt-4">
            <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1" />
          </View>
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <View className="flex-row flex-wrap justify-center py-4 px-2">
              {ICON_GLYPHS.map((glyph) => (
                <TouchableOpacity
                  key={glyph}
                  onPress={() => onIconSelect(glyph)}
                  className="w-1/4 items-center justify-center p-4"
                >
                  <IconGlyph
                    glyph={glyph}
                    dim={32}
                    fill={colorScheme === "dark" ? "#FFFFFF" : "#000000"}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </BlurView>
    </Modal>
  );
};

export default IconPickerBottomSheet;
