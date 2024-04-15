import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Realm from "realm";

import SuccessSVG from "../../assets/GlyphProvider/glyph/User Interface/Glyph/success.svg";
import { Account } from "../../models/Account";
import { Category } from "../../models/Category";
import { ThemeColor } from "../../utils/Theme";
import { MyButton } from "../Button/Button";
import { Toggle } from "../ControlElements/Toggle";
import AttachFileField from "../InputElements/AttachFileField";
import DropdownMenuField from "../InputElements/DropdownMenuField";
import PlainTextField from "../InputElements/PlainTextField";

interface TransactionFormProps {
  onConfirmation: () => void;
  onCategoryChange: (categoryObj: Category) => void;
  onAccountChange: (accountObj: Account) => void;
  onDateChange: (value: number) => void;
  onDescriptionChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  onAttachChange: (data: string) => void;
  categories: Realm.Results<Category>;
  accounts: Realm.Results<Account>;
  isRecurring: boolean;
  toggleRecurring: () => void;
  onFrequencyChange: (value: string) => void;
  onEndDateChange: (value: number) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  onConfirmation,
  onCategoryChange,
  onAccountChange,
  onDateChange,
  onDescriptionChange,
  onTitleChange,
  onAttachChange,
  categories,
  accounts,
  isRecurring,
  toggleRecurring,
  onFrequencyChange,
  onEndDateChange,
}) => {
  const accountOptions = accounts.map((i) => i.title);
  const categoryOptions = categories.map((i) => i.title);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [selectedFreq, setSelectedFreq] = useState("Frequency");
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const colorScheme = useColorScheme();

  const handleFrequencyChange = (value: string) => {
    setSelectedFreq(value);
    onFrequencyChange(value);
  };
  const handleEndDateChange = (event: any, date?: Date | undefined) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedEndDate(new Date(date.getTime()));
      onEndDateChange(date.getTime());
    }
  };

  const handleDateTimeConfirm = (date: Date) => {
    setTransactionDate(new Date(date.getTime()));
    onDateChange(date.getTime());
    setDateTimePickerVisibility(false);
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(false);
    onConfirmation();
  };

  return (
    <>
      <ScrollView
        className="mt-4 w-full bg-white h-full rounded-t-3xl flex-1 mb-6 dark:bg-s_dark-100"
        automaticallyAdjustKeyboardInsets
      >
        <View className="ml-2 mr-2 mt-6">
          <PlainTextField
            customPlaceholder="Title"
            onTextChange={onTitleChange}
          />
        </View>
        <View className="ml-2 mr-2 pt-2">
          <DropdownMenuField
            options={categoryOptions}
            placeholder="Category"
            onValueChange={(value: string) =>
              onCategoryChange(categories[categoryOptions.indexOf(value)])
            }
          />
        </View>
        <View className="ml-2 mr-2 mt-6">
          <TouchableOpacity
            className="justify-center items-center mx-4 h-20 bg-s_light-100 dark:bg-s_dark-75 border border-gray-300 rounded-3xl px-4"
            onPress={() => setDateTimePickerVisibility(true)}
          >
            <Text className="text-2xl dark:text-s_light-80">
              {transactionDate.toLocaleString()}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDateTimePickerVisible}
            mode="datetime"
            display="compact"
            onConfirm={handleDateTimeConfirm}
            onCancel={() => setDateTimePickerVisibility(false)}
          />
        </View>

        <View className="ml-2 mr-2 mt-2">
          <PlainTextField
            customPlaceholder="Description"
            onTextChange={onDescriptionChange}
          />
        </View>
        <View className="ml-2 mr-2 mt-2">
          <DropdownMenuField
            options={accountOptions}
            placeholder="Account"
            onValueChange={(value: string) =>
              onAccountChange(accounts[accountOptions.indexOf(value)])
            }
          />
        </View>
        <View className="mt-2">
          <AttachFileField
            customPlaceholder="Add Attachment"
            onAttachChange={onAttachChange}
          />
        </View>
        <View className="flex-row justify-between ml-2 mr-2 mt-8 mb-1">
          <Text
            className="ml-5 text-2xl mb-2"
            style={{
              color: isRecurring
                ? colorScheme === "dark"
                  ? ThemeColor.s_light["80"]
                  : ThemeColor.s_dark["100"]
                : "#9CA3AF",
            }}
          >
            Recurring
          </Text>
          <View className="mr-5">
            <Toggle onToggle={toggleRecurring} isEnabled={isRecurring} />
          </View>
        </View>
        {isRecurring && (
          <View className="ml-2 mr-2 mt-4">
            <View className="mb-2">
              <DropdownMenuField
                options={["Yearly", "Monthly", "Weekly", "Daily"]}
                placeholder={selectedFreq}
                onValueChange={handleFrequencyChange}
              />
            </View>

            <View className="mb-2">
              <TouchableOpacity
                onPress={() => setShowDatePicker(!showDatePicker)}
                className="flex-row justify-between border border-gray-300 bg-white dark:bg-s_dark-75 rounded-3xl h-20 ml-4 mr-4 mt-5"
              >
                <View>
                  <Text className="mt-5 ml-5 mb-1 text-2xl dark:text-s_light-80">
                    End Date
                  </Text>
                </View>
                <View>
                  <Text className="mt-5 ml-0 mr-5 text-2xl mb-1 dark:text-s_light-80">
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
        <View className="mb-8 flex-auto pb-8">
          <MyButton onPress={() => setShowConfirmation(true)} text="Continue" />
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
