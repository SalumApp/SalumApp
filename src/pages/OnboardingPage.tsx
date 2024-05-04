import * as React from "react";
import { Text, View } from "react-native";

import { IconGlyph } from "../assets/Glyph";
import { MyButton } from "../components/Button/Button";
import PageIndicatorDots from "../components/Graph/PageIndicatorDots";
import { SafeAreaInsetsView } from "../utils/SafeArea";

interface OnboardingPageProps {
  onboardingPageNumber: number;
  numOnboardingPages: number;
  iconGlyphOnboarding: string;
  onboardingTitle: string;
  onboardingDescription: string;
  onButtonPress: () => void;
  buttonText: string;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({
  onboardingPageNumber = 0,
  numOnboardingPages = 3,
  iconGlyphOnboarding = "Onboarding-0",
  onboardingTitle = "Gain total control of your money",
  onboardingDescription = "Become your own money manager and make every cent count",
  onButtonPress,
  buttonText = "Let's go",
}) => {
  return (
    <SafeAreaInsetsView className="flex-1 bg-s_light-60 dark:bg-s_dark_navy-100">
      <View className="flex-1 justify-between">
        <View>
          <View className="items-center mt-4">
            <IconGlyph glyph={iconGlyphOnboarding} dim={340} fill="#FFFFFF" />
          </View>
          <View className="items-center mt-6 mx-6">
            <Text className="font-medium text-5xl text-s_dark-50 dark:text-s_light-100 text-center">
              {onboardingTitle}
            </Text>
          </View>
          <View className="items-center mt-4 mx-6">
            <Text className="font-medium text-2xl text-s_light-20 text-center">
              {onboardingDescription}
            </Text>
          </View>
        </View>
        <View className="flex-1" />
        <View className="flex-1 items-center">
          <PageIndicatorDots
            currentPage={onboardingPageNumber}
            totalPages={numOnboardingPages}
          />
        </View>
        <View className="items-center mb-4 mx-6 h-20">
          <MyButton onPress={onButtonPress} text={buttonText} />
        </View>
      </View>
    </SafeAreaInsetsView>
  );
};

export default OnboardingPage;
