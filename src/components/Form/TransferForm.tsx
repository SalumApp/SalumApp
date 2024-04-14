import React, { useState } from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import Realm from "realm";

import TransactionSvg from "../../assets/GlyphProvider/glyph/Finance/Glyph/transaction.svg";
import SuccessSVG from "../../assets/GlyphProvider/glyph/User Interface/Glyph/success.svg";
import { Account } from "../../models/Account";
import { MyButton } from "../Button/Button";
import DropdownMenuField from "../InputElements/DropdownMenuField";

interface TransferFormProps {
  onConfirmation: () => void;
  onFromAccountChange: (accountObj: Account) => void;
  onToAccountChange: (accountObj: Account) => void;
  accounts: Realm.Results<Account>;
}

const TransferForm: React.FC<TransferFormProps> = ({
  onConfirmation,
  onFromAccountChange,
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
      <View className="w-full bg-white rounded-t-3xl">
        <View className="mx-2 mt-6 mb-4 pt-2 flex-row justify-between">
          <View className="w-48">
            <DropdownMenuField
              options={accountOptions}
              placeholder="From"
              onValueChange={(value: string) =>
                onFromAccountChange(accounts[accountOptions.indexOf(value)])
              }
            />
          </View>
          <View className="items-center justify-center">
            <TransactionSvg width={45} height={45} fill="#91919F" />
          </View>
          <View className="w-48">
            <DropdownMenuField
              options={accountOptions}
              placeholder="To"
              onValueChange={(value: string) =>
                onToAccountChange(accounts[accountOptions.indexOf(value)])
              }
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
                <SuccessSVG width={52} height={52} fill="#00A86B" />
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
