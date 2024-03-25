import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import GallerySvg from "../../assets/GlyphProvider/glyph/Communication/Glyph/gallery.svg";
import DocSvg from "../../assets/GlyphProvider/glyph/Document/Glyph/file.svg";
import CamSvg from "../../assets/GlyphProvider/glyph/User Interface/Glyph/camera.svg";

interface BottomSheetAttachProps {
  visible: boolean;
  onClose: () => void;
  onPressCam: () => void;
  onPressGallery: () => void;
  onPressDoc: () => void;
}

const BottomSheetAttach: React.FC<BottomSheetAttachProps> = ({
  visible,
  onClose,
  onPressCam,
  onPressGallery,
  onPressDoc,
}) => {
  const insets = useSafeAreaInsets();

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
            <View
              style={{
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              }}
            >
              <View className="flex-row justify-between items-center mt-5 ml-3.5 mr-3.5 h-30 mb-4">
                <TouchableOpacity
                  className="flex items-center justify-center self-center ml-1.5 mr-1.5 bg-s_blue-20 rounded-3xl flex-1 w-1 h-28"
                  onPress={onPressCam}
                >
                  <CamSvg width={36} height={32} fill="#0077FF" />
                  <Text className="mt-2 text-s_blue-100 text-xl font-semibold">
                    Camera
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex items-center justify-center self-center ml-1.5 mr-1.5 bg-s_blue-20 rounded-3xl flex-1 w-1 h-28"
                  onPress={onPressGallery}
                >
                  <GallerySvg width={36} height={32} fill="#0077FF" />
                  <Text className="mt-2 text-s_blue-100 text-xl font-semibold">
                    Image
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex items-center justify-center self-center ml-1.5 mr-1.5 bg-s_blue-20 rounded-3xl flex-1 w-1 h-28"
                  onPress={onPressDoc}
                >
                  <DocSvg width={36} height={32} fill="#0077FF" />
                  <Text className="mt-2 text-s_blue-100 text-xl font-semibold">
                    Document
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomSheetAttach;
