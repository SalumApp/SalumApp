import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useObject, useQuery } from "@realm/react";
import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import Realm from "realm";

import { IconGlyph } from "../assets/Glyph";
import FriendCard from "../components/Card/FriendCard";
import { TopNav } from "../components/Navigation/TopNav";
import { Currency } from "../models/Currency";
import { Friend } from "../models/Friend";
import { mainCurrency } from "../utils/Config";
import { addAlpha } from "../utils/Misc";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

interface FriendSegmentProps {
  segmentTitle: string;
  friendList: Friend[];
  backgroundColor: string;
}

const FriendSegment: React.FC<FriendSegmentProps> = ({
  segmentTitle,
  friendList,
  backgroundColor,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const defaultCurrency = useObject(Currency, mainCurrency);
  return (
    <View className="m-4 py-4 rounded-3xl" style={{ backgroundColor }}>
      <Text className="pl-8 text-3xl font-semibold dark:text-s_light-80">
        {segmentTitle}
      </Text>
      {friendList.map((friend) => {
        return (
          <FriendCard
            key={friend._id.toString()}
            friendName={friend.name}
            netFriendBalance={defaultCurrency.getAmount(
              friend.calculateNetBalance(),
            )}
            friendIconColor={friend.color}
            onPress={() =>
              navigation.navigate("friend detail", {
                friendId: friend._id,
              })
            }
          />
        );
      })}
    </View>
  );
};

export const FriendScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const friends = useQuery(Friend);

  const youOweFriends = friends.filter(
    (friend) => friend.calculateNetBalance() < 0,
  );
  const theyOweFriends = friends.filter(
    (friend) => friend.calculateNetBalance() > 0,
  );
  const noMoneyOwedFriends = friends.filter(
    (friend) => friend.calculateNetBalance() === 0,
  );
  const titleColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <SafeAreaInsetsView className="h-full bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Friend"
        titleColor={titleColor}
        left={<View className="w-14" />}
        right={
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("friend detail", {
                friendId: new Realm.BSON.UUID(),
              })
            }
            className="pl-1 pr-5"
          >
            <IconGlyph glyph="Plus" dim={24} fill={titleColor} />
          </TouchableOpacity>
        }
      />
      {friends.length === 0 && (
        <View className="flex-1 items-center justify-center h-full">
          <Text className="flex-col text-2xl dark:text-s_light-80 self-center align-middle">
            No Friends Found
          </Text>
        </View>
      )}
      {friends.length !== 0 && (
        <ScrollView>
          {youOweFriends.length !== 0 && (
            <FriendSegment
              segmentTitle="You Owe"
              friendList={youOweFriends}
              backgroundColor={addAlpha(ThemeColor.s_red["100"], 0.03)}
            />
          )}
          {theyOweFriends.length !== 0 && (
            <FriendSegment
              segmentTitle="You're Owed"
              friendList={theyOweFriends}
              backgroundColor={addAlpha(ThemeColor.s_green["100"], 0.03)}
            />
          )}
          {noMoneyOwedFriends.length !== 0 && (
            <FriendSegment
              segmentTitle="No Money Owed"
              friendList={noMoneyOwedFriends}
              backgroundColor={addAlpha(ThemeColor.s_yellow["100"], 0.03)}
            />
          )}
        </ScrollView>
      )}
    </SafeAreaInsetsView>
  );
};

export default FriendScreen;
