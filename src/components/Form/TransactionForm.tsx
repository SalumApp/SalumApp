import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import SuccessSVG from "../../assets/GlyphProvider/glyph/User Interface/Glyph/success.svg";
import { MyButton } from "../Button/Button";
import { Toggle } from "../ControlElements/Toggle";
import AttachFileField from "../InputElements/AttachFileField";
import DropdownMenuField from "../InputElements/DropdownMenuField";
import PlainTextField from "../InputElements/PlainTextField";

interface TransactionFormProps {
  onConfirmation: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  onConfirmation,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);

  const [, setSelectedCategory] = useState(null);
  const [, setSelectedAccount] = useState(null);
  const [selectedFreq, setSelectedFreq] = useState("Frequency");
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleFreqChange = (value: string) => {
    setSelectedFreq(value);
  };

  const handleEndDateChange = (event: any, date?: Date | undefined) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedEndDate(date);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleCategoryChange = (option: string) => {
    setSelectedCategory(option);
  };

  const handleAccountChange = (option: string) => {
    setSelectedAccount(option);
  };

  const showDateTimePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleDateTimeConfirm = (date: Date) => {
    setTransactionDate(date);
    hideDateTimePicker();
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
      <ScrollView className="mt-4 w-full bg-white h-full rounded-t-3xl flex-1">
        <View className="ml-2 mr-2 mt-8 pt-2">
          <DropdownMenuField
            options={["Shopping", "Recurring", "Dining"]}
            placeholder="Category"
            onValueChange={handleCategoryChange}
          />
        </View>
        <View className="ml-2 mr-2 mt-6">
          <TouchableOpacity
            className="justify-center items-center mx-4 h-20 bg-white border border-gray-300 rounded-3xl px-4"
            onPress={showDateTimePicker}
          >
            <Text className="text-2xl">{transactionDate.toLocaleString()}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDateTimePickerVisible}
            mode="datetime"
            display="compact"
            onConfirm={handleDateTimeConfirm}
            onCancel={hideDateTimePicker}
          />
        </View>
        <View className="ml-2 mr-2 mt-2">
          <PlainTextField customPlaceholder="Description" />
        </View>
        <View className="ml-2 mr-2 mt-2">
          <DropdownMenuField
            options={[
              "Chase Checking",
              "Chase Credit",
              "Bank of America Checking",
            ]}
            placeholder="Account"
            onValueChange={handleAccountChange}
          />
        </View>
        <View className="mt-2">
          <AttachFileField customPlaceholder="Add Attachment" />
        </View>
        <View className="flex-row justify-between ml-2 mr-2 mt-8 mb-1">
          <Text
            className="ml-5 text-2xl mb-2"
            style={{ color: isEnabled ? "#000000" : "#9CA3AF" }}
          >
            Recurring
          </Text>
          <View className="mr-5">
            <Toggle onToggle={toggleSwitch} isEnabled={isEnabled} />
          </View>
        </View>
        {isEnabled && (
          <View className="ml-2 mr-2 mt-4">
            <View className="mb-2">
              <DropdownMenuField
                options={["Yearly", "Monthly", "Weekly", "Daily"]}
                placeholder={selectedFreq}
                onValueChange={handleFreqChange}
              />
            </View>

            <View className="mb-2">
              <TouchableOpacity
                onPress={toggleDatePicker}
                className="flex-row justify-between border border-gray-300 bg-white rounded-3xl h-20 ml-4 mr-4 mt-5"
              >
                <View>
                  <Text className="mt-5 ml-5 mb-1 text-2xl">End Date</Text>
                </View>
                <View>
                  <Text className="mt-5 ml-0 mr-5 text-2xl mb-1">
                    {selectedEndDate ? selectedEndDate.toDateString() : "Never"}
                  </Text>
                </View>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedEndDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={handleEndDateChange}
                />
              )}
            </View>
          </View>
        )}
        <View className="mb-8 flex-auto">
          <MyButton onPress={contPress} text="Continue" />
        </View>
      </ScrollView>
      {showConfirmation && (
        <Modal visible={showConfirmation} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={handleConfirmationClick}>
            <View className="flex-1 bg-s_dark-100op justify-center items-center">
              <View className="flex-col bg-s_light-100 p-5 rounded-3xl items-center">
                <SuccessSVG width={52} height={52} fill="#00A86B" />
                <Text className="text-lg font-medium">
                  Transaction has been successfully added
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

export default TransactionForm;
