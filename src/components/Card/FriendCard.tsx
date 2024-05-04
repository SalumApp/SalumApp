import { useObject } from "@realm/react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { Currency } from "../../models/Currency";
import { mainCurrency } from "../../utils/Config";

interface FriendCardProps {
  friendName: string;
  netFriendBalance: number;
  friendIconColor: string;
  onPress: () => void;
}

const FriendCard: React.FC<FriendCardProps> = ({
  friendName = "John Smith",
  netFriendBalance = 0,
  friendIconColor = "rgb(238, 165, 25)",
  onPress,
}) => {
  const baseCurrency = useObject(Currency, mainCurrency);
  const balanceColor =
    netFriendBalance >= 0 ? "text-s_green-100" : "text-s_red-100";
  return (
    <TouchableOpacity
      className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75"
      onPress={onPress}
    >
      <View className="flex-row pt-3 pb-3 items-center">
        <View className="rounded-3xl w-20 h-20 flex justify-center items-center">
          <View
            className="absolute w-full h-full rounded-3xl"
            style={{ backgroundColor: friendIconColor, opacity: 0.35 }}
          />
          <IconGlyph glyph="User" dim={52} fill={friendIconColor} />
        </View>
        <View className="flex-1 pl-4 flex-row justify-between">
          <Text
            className="text-xl font-medium dark:text-s_light-80"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {friendName}
          </Text>
          <View>
            {netFriendBalance !== 0 ? (
              <Text
                className={`${balanceColor} text-xl font-medium mb-1 mt-1 mr-4`}
              >
                {baseCurrency.symbol}
                {baseCurrency.getAmountString(
                  Math.abs(netFriendBalance),
                  undefined,
                  false,
                )}
              </Text>
            ) : (
              <Text className="text-s_light-20 text-xl font-medium mb-1 mt-1 mr-4">
                --
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FriendCard;
