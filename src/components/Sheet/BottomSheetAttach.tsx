import { BlurView } from "expo-blur";
import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { IconGlyph } from "../../assets/Glyph";

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
  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={100} tint="dark" className="flex-1">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <View className="bg-s_light-100 dark:bg-s_dark-100 rounded-t-3xl">
          <View className="items-center py-2.5 pt-4">
            <View className="w-16 h-1.5 bg-s_light-20 rounded-3xl mt-1" />
          </View>
          <View>
            <View className="flex-row justify-between items-center mt-5 ml-3.5 mr-3.5 mb-10 h-30">
              <TouchableOpacity
                className="flex items-center justify-center self-center ml-1.5 mr-1.5 bg-s_blue-20 rounded-3xl flex-1 w-1 h-28"
                onPress={onPressCam}
              >
                <IconGlyph glyph="Camera" dim={32} fill="#0077FF" />
                <Text
                  className="mt-2 text-s_blue-100 text-xl font-semibold"
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex items-center justify-center self-center ml-1.5 mr-1.5 bg-s_blue-20 rounded-3xl flex-1 w-1 h-28"
                onPress={onPressGallery}
              >
                <IconGlyph glyph="Gallery" dim={40} fill="#0077FF" />
                <Text
                  className="mt-2 text-s_blue-100 text-xl font-semibold"
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  Image
                </Text>
              </TouchableOpacity>
              {/*<TouchableOpacity*/}
              {/*  className="flex items-center justify-center self-center ml-1.5 mr-1.5 bg-s_blue-20 rounded-3xl flex-1 w-1 h-28"*/}
              {/*  onPress={onPressDoc}*/}
              {/*>*/}
              {/*  <IconGlyph glyph="File" dim={36} fill="#0077FF" />*/}
              {/*  <Text*/}
              {/*    className="mt-2 text-s_blue-100 text-xl font-semibold"*/}
              {/*    ellipsizeMode="tail"*/}
              {/*    numberOfLines={1}*/}
              {/*  >*/}
              {/*    Document*/}
              {/*  </Text>*/}
              {/*</TouchableOpacity>*/}
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default BottomSheetAttach;
