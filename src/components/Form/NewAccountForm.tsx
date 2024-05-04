import React, { useState } from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { ThemeColor } from "../../utils/Theme";
import { MyButton } from "../Button/Button";
import DropdownMenuField from "../InputElements/DropdownMenuField";
import PlainTextField from "../InputElements/PlainTextField";

interface NewAccountFormProps {
  onConfirmation: () => void;
}

const NewAccountForm = ({ onConfirmation }: NewAccountFormProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountChange = (option: string) => {
    setSelectedAccount(option);
  };

  const contPress = () => {
    setShowConfirmation(true);
  };
  const handleConfirmationClick = () => {
    setShowConfirmation(false);
    // TODO: Save the data and then move to the homepage
    // For now, just navigate to the homepage
    // Example: navigation.navigate('Home');
    onConfirmation();
  };

  return (
    <>
      <View className="mt-4 w-full bg-white h-full rounded-t-3xl flex-1">
        <View className="ml-2 mr-2 mt-8 pt-2">
          <PlainTextField placeholder="Name" />
        </View>
        <View className="ml-2 mr-2 mt-2">
          <DropdownMenuField
            options={["Bank", "Credit Card", "Wallet"]}
            placeHolder="Account"
            onValueChange={handleAccountChange}
            currentSelection={selectedAccount}
          />
        </View>
        <View className="ml-2 mr-2 mt-2 mb-8 h-20">
          <MyButton onPress={contPress} text="Continue" />
        </View>
      </View>
      {showConfirmation && (
        <Modal visible={showConfirmation} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={handleConfirmationClick}>
            <View className="flex-1 bg-s_dark-100op justify-center items-center">
              <View className="flex-col bg-s_light-100 p-5 rounded-3xl items-center">
                <IconGlyph
                  glyph="Success"
                  dim={52}
                  fill={ThemeColor.s_green["100"]}
                />
                <Text className="text-lg font-medium">You are set!</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

export default NewAccountForm;
