import React from "react";
import { View } from "react-native";

interface PageIndicatorDotsProps {
  currentPage: number;
  totalPages: number;
}

const PageIndicatorDots: React.FC<PageIndicatorDotsProps> = ({
  currentPage,
  totalPages,
}) => {
  const currPageDotSize = 7;
  const otherPageDotSize = 3;
  return (
    <View className="flex-row justify-center items-center">
      {Array.from({ length: totalPages }, (_, index) => (
        <View
          key={index}
          className={`w-${currentPage === index ? currPageDotSize : otherPageDotSize} h-${currentPage === index ? currPageDotSize : otherPageDotSize} rounded-full ${
            currentPage === index ? "bg-s_blue-100" : "bg-s_light-20"
          } mx-2`}
        />
      ))}
    </View>
  );
};

export default PageIndicatorDots;
