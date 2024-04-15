import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Category } from "../../models/Category";
import { getIcon } from "../../utils/GlyphProvider";
import { addAlpha } from "../../utils/Misc";

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      className="m-4 mt-3 mb-0 pl-5 rounded-3xl bg-s_light-80 dark:bg-s_dark_navy-75"
      onPress={onPress}
    >
      <View className="flex-row pt-3 pb-3">
        <View
          className="rounded-3xl w-20 h-20 flex justify-center items-center"
          style={{ backgroundColor: addAlpha(category.color, 0.2) }}
        >
          {getIcon(category.glyph, 52, 52, category.color)}
        </View>
        <View className="pl-4 flex-1 justify-center">
          <Text className="text-xl font-medium dark:text-s_light-80">
            {category.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
