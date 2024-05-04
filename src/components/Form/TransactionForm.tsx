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

import { IconGlyph } from "../../assets/Glyph";
import { Account } from "../../models/Account";
import { Category } from "../../models/Category";
import { Friend } from "../../models/Friend";
import { ThemeColor } from "../../utils/Theme";
import { MyButton } from "../Button/Button";
import { Toggle } from "../ControlElements/Toggle";
import AttachFileField from "../InputElements/AttachFileField";
import DropdownMenuField from "../InputElements/DropdownMenuField";
import PlainTextField from "../InputElements/PlainTextField";
import BottomSheet from "../Sheet/BottomSheet";

interface TransactionFormProps {
  onConfirmation: () => void;
  currentCategorySelection: string;
  onCategoryChange: (categoryObj: Category) => void;
  currentAccountSelection: string;
  onAccountChange: (accountObj: Account) => void;
  onDateChange: (date: Date) => void;
  onDescriptionChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  onAttachChange: (data: string) => void;
  categories: Realm.Results<Category>;
  accounts: Realm.Results<Account>;
  friends: Realm.Results<Friend>;
  isRecurring: boolean;
  toggleRecurring: () => void;
  isSplit: boolean;
  toggleSplit: () => void;
  curFriends: Friend[];
  onFriendChange: (friendObjs: Friend[]) => void;
  currentFrequencySelection: string;
  onFrequencyChange: (value: string) => void;
  onEndDateChange: (date: Date) => void;
  transactionType: string;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  onConfirmation,
  currentCategorySelection,
  onCategoryChange,
  currentAccountSelection,
  onAccountChange,
  onDateChange,
  onDescriptionChange,
  onTitleChange,
  onAttachChange,
  categories,
  accounts,
  friends,
  isRecurring,
  toggleRecurring,
  isSplit,
  toggleSplit,
  curFriends,
  onFriendChange,
  currentFrequencySelection,
  onFrequencyChange,
  onEndDateChange,
  transactionType,
}) => {
  const accountOptions = accounts.map((i) => i.title);
  const categoryOptions = categories.map((i) => i.title);
  const friendsOptions = friends.map((i) => i.name);

  const [transactionDate, setTransactionDate] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const colorScheme = useColorScheme();

  const [selectedFriends, setSelectedFriends] = useState([]);
  const [isFriendListVisible, setIsFriendListVisible] = useState(false);

  const handleEndDateChange = (event: any, date?: Date | undefined) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedEndDate(new Date(date.getTime()));
      onEndDateChange(new Date(date.getTime()));
    }
  };

  const handleDateTimeConfirm = (date: Date) => {
    setTransactionDate(new Date(date.getTime()));
    onDateChange(new Date(date.getTime()));
    setDateTimePickerVisibility(false);
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(false);
    onConfirmation();
  };

  const handleAddFriend = () => {
    setIsFriendListVisible(true);
  };

  return (
    <>
      <ScrollView
        className="mt-4 mb-20 w-full bg-s_light-100 rounded-t-3xl dark:bg-s_dark-100"
        automaticallyAdjustKeyboardInsets
      >
        <View className="mx-6 h-20 mt-6 mb-4">
          <PlainTextField placeholder="Title" onChangeText={onTitleChange} />
        </View>
        <View className="ml-2 mr-2 pt-2">
          <DropdownMenuField
            options={categoryOptions}
            placeHolder="Category"
            onValueChange={(value: string) =>
              onCategoryChange(categories[categoryOptions.indexOf(value)])
            }
            currentSelection={currentCategorySelection}
          />
        </View>
        <View className="ml-2 mr-2 mt-6">
          <TouchableOpacity
            className="flex-row justify-between items-center mx-4 h-20 bg-s_light-100 dark:bg-s_dark-75 border border-gray-300 rounded-3xl px-4"
            onPress={() => setDateTimePickerVisibility(true)}
          >
            <Text className="text-2xl dark:text-s_light-80">Time</Text>
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
        <View className="mx-6 h-20 mt-6 mb-4">
          <PlainTextField
            placeholder="Description"
            onChangeText={onDescriptionChange}
          />
        </View>
        <View className="ml-2 mr-2 mt-2">
          <DropdownMenuField
            options={accountOptions}
            placeHolder="Account"
            onValueChange={(value: string) =>
              onAccountChange(accounts[accountOptions.indexOf(value)])
            }
            currentSelection={currentAccountSelection}
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
                placeHolder={currentFrequencySelection ?? "Frequency"}
                onValueChange={onFrequencyChange}
                currentSelection={currentFrequencySelection}
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
        {transactionType === "expense" && (
          <>
            <View className="flex-row justify-between ml-2 mr-2 mt-8">
              <Text
                className="ml-5 text-2xl mb-2"
                style={{
                  color: isSplit
                    ? colorScheme === "dark"
                      ? ThemeColor.s_light["80"]
                      : ThemeColor.s_dark["100"]
                    : "#9CA3AF",
                }}
              >
                Split
              </Text>
              <View className="mr-5">
                <Toggle onToggle={toggleSplit} isEnabled={isSplit} />
              </View>
            </View>
            {isSplit && (
              <View className="ml-2 mr-2 mt-4">
                {selectedFriends.map((friend) => (
                  <View
                    key={friend}
                    className="flex-row items-center mb-4 mx-4"
                  >
                    <Text
                      className="ml-2 text-2xl text-s_dark-100 dark:text-s_light-100 flex-1"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {friend}
                    </Text>
                    <View className="flex-row items-center ml-auto">
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedFriends(
                            selectedFriends.filter((item) => item !== friend),
                          );
                          onFriendChange(
                            curFriends.filter((item) => item.name !== friend),
                          );
                        }}
                      >
                        <IconGlyph glyph="Trash" dim={35} fill="#FF0000" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={handleAddFriend}
                  className="flex-row items-center mt-4 mx-4 my-4"
                >
                  <View className="w-16 h-16 bg-s_blue-100 rounded-3xl items-center justify-center">
                    <IconGlyph glyph="Plus" dim={32} fill="#FFFFFF" />
                  </View>
                  <Text className="ml-2 text-3xl text-s_dark-100 dark:text-s_light-100">
                    Add Friend
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        <MyButton onPress={() => setShowConfirmation(true)} text="Continue" />
        <View className="h-24" />
      </ScrollView>
      {showConfirmation && (
        <Modal visible={showConfirmation} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={handleConfirmationClick}>
            <View className="flex-1 bg-s_dark-100op justify-center items-center">
              <View className="flex-col bg-s_light-100 p-5 rounded-3xl items-center">
                <IconGlyph glyph="Success" dim={52} fill="#00A86B" />
                <Text className="text-lg font-medium">
                  Transaction has been successfully added
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
      <BottomSheet
        visible={isFriendListVisible}
        onClose={() => setIsFriendListVisible(false)}
        options={friendsOptions}
        onOptionSelect={(friendName) => {
          if (!selectedFriends.includes(friendName)) {
            setSelectedFriends([...selectedFriends, friendName]);
            onFriendChange([
              ...curFriends,
              friends[friendsOptions.indexOf(friendName)],
            ]);
          }
          setIsFriendListVisible(false);
        }}
      />
    </>
  );
};
