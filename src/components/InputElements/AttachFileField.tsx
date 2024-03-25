import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import Attachment from "../../assets/GlyphProvider/glyph/User Interface/Glyph/attachment.svg";
import BottomSheetAttach from "../Sheet/BottomSheetAttach";

const AttachFileField = ({ customPlaceholder = "Input..." }) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [image, setImage] = useState(null);

  const handleToggle = () => {
    setIsBottomSheetVisible(true);
  };

  const pickImageCam = async () => {
    setIsBottomSheetVisible(false);
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
    } else {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      // console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const pickImageGallery = async () => {
    setIsBottomSheetVisible(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
      exif: false,
      orderedSelection: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickDoc = async () => {
    setIsBottomSheetVisible(false);
    const result = await DocumentPicker.getDocumentAsync();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="relative px-4">
      <TouchableOpacity
        activeOpacity={0.7}
        className="ml-2 mr-2 mt-4"
        onPress={handleToggle}
      >
        {image ? (
          <View className="flex-row items-center justify-center px-4 border border-gray-300 bg-white rounded-3xl h-20">
            <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />
          </View>
        ) : (
          <View className="flex-row items-center justify-center px-4 border-dashed border border-gray-300 bg-white rounded-3xl h-20">
            <Attachment width={40} height={40} fill="#91919F" />
            <Text className="text-2xl" style={{ color: "#9CA3AF" }}>
              {customPlaceholder}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <BottomSheetAttach
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        onPressCam={pickImageCam}
        onPressGallery={pickImageGallery}
        onPressDoc={pickDoc}
      />
    </View>
  );
};

export default AttachFileField;
