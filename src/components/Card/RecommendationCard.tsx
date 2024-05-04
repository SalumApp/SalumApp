import React from "react";
import { Text, View } from "react-native";

import { IconGlyph } from "../../assets/Glyph";
import { addAlpha } from "../../utils/Misc";
import { ThemeColor } from "../../utils/Theme";

interface RecommendationCardProps {
  title: string;
  description: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title = "Recommendation",
  description = "Description",
}: RecommendationCardProps) => {
  return (
    <View className="m-5 mt-4 bg-white rounded-3xl dark:bg-s_dark_navy-75">
      <View className="flex-row pt-5">
        <View
          className="rounded-3xl ml-4 w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(ThemeColor.s_yellow["100"], 0.2) }}
        >
          <IconGlyph glyph="Lamp" dim={52} fill={ThemeColor.s_yellow["100"]} />
        </View>
        <View className="ml-4 flex-1">
          <Text
            className="text-2xl pt-1.5 font-medium text-s_dark-100 dark:text-s_light-100 mr-4"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
      </View>
      <Text className="text-xl dark:text-s_light-80 self-center my-4 mx-3">
        {description}
      </Text>
    </View>
  );
};

export default RecommendationCard;
