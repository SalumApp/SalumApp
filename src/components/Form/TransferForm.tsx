import React, { useState } from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import Realm from "realm";

import { IconGlyph } from "../../assets/Glyph";
import { Account } from "../../models/Account";
import { MyButton } from "../Button/Button";
import DropdownMenuField from "../InputElements/DropdownMenuField";

interface TransferFormProps {
  onConfirmation: () => void;
  currentFromAccountSelection: string;
  onFromAccountChange: (accountObj: Account) => void;
  currentToAccountSelection: string;
  onToAccountChange: (accountObj: Account) => void;
  accounts: Realm.Results<Account>;
}

const TransferForm: React.FC<TransferFormProps> = ({
  onConfirmation,
  currentFromAccountSelection,
  onFromAccountChange,
  currentToAccountSelection,
  onToAccountChange,
  accounts,
}) => {
  const accountOptions = accounts.map((i) => i.title);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmationClick = () => {
    setShowConfirmation(false);
    onConfirmation();
  };

  return (
    <>
      <View className="w-full bg-s_light-100 dark:bg-s_dark-100 rounded-t-3xl">
        <View className="mx-2 mt-6 mb-4 pt-2 flex-row justify-between">
          <View className="w-48">
            <DropdownMenuField
              options={accountOptions}
              placeHolder="From"
              onValueChange={(value: string) =>
                onFromAccountChange(accounts[accountOptions.indexOf(value)])
              }
              currentSelection={currentFromAccountSelection}
            />
          </View>
          <View className="items-center justify-center">
            <IconGlyph glyph="Transaction" dim={45} fill="#91919F" />
          </View>
          <View className="w-48">
            <DropdownMenuField
              options={accountOptions}
              placeHolder="To"
              onValueChange={(value: string) =>
                onToAccountChange(accounts[accountOptions.indexOf(value)])
              }
              currentSelection={currentToAccountSelection}
            />
          </View>
        </View>
        <View className="flex-auto mb-20 h-20">
          <MyButton onPress={() => setShowConfirmation(true)} text="Continue" />
        </View>
      </View>
      {showConfirmation && (
        <Modal visible={showConfirmation} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={handleConfirmationClick}>
            <View className="flex-1 bg-s_dark-100op justify-center items-center">
              <View className="flex-col bg-s_light-100 p-5 rounded-3xl items-center">
                <IconGlyph glyph="Success" dim={52} fill="#00A86B" />
                <Text className="text-lg font-medium">
                  Transfer has been successfully added
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

export default TransferForm;
