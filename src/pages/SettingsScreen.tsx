import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import ContactSVG from "../assets/GlyphProvider/glyph/Communication/Glyph/contact.svg";
import PiechartSVG from "../assets/GlyphProvider/glyph/Finance/Glyph/piechart.svg";
import MuseumSVG from "../assets/GlyphProvider/glyph/Travel/Glyph/museum.svg";
import LockSVG from "../assets/GlyphProvider/glyph/User Interface/Glyph/lock.svg";
import SettingsSVG from "../assets/GlyphProvider/glyph/User Interface/Glyph/settings.svg";
import TrashSVG from "../assets/GlyphProvider/glyph/User Interface/Glyph/trash.svg";
import CloudySVG from "../assets/GlyphProvider/glyph/Weather/Glyph/cloudy.svg";
import { SafeAreaInsetsView } from "../utils/SafeArea";
import { ThemeColor } from "../utils/Theme";

export const SettingsScreen = () => {
  const iconMainColor = ThemeColor.s_blue["100"];
  const iconDangerColor = ThemeColor.s_red["100"];

  return (
    <View className="h-full bg-s_light-40">
      <SafeAreaInsetsView className="flex-col">
        <View className="ml-10 mt-5">
          <Text className="text-6xl font-medium">Options</Text>
        </View>
        <ScrollView>
          <View className="mx-12 mt-4 bg-s_light-100 rounded-3xl">
            <TouchableOpacity className="flex-row items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <PiechartSVG width={35} height={35} fill={iconMainColor} />
              </View>
              <Text className="text-xl font-medium ml-6">
                Manage Categories
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <MuseumSVG width={35} height={35} fill={iconMainColor} />
              </View>
              <Text className="text-xl font-medium ml-6">Manage Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <ContactSVG width={35} height={35} fill={iconMainColor} />
              </View>
              <Text className="text-xl font-medium ml-6">Manage Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <CloudySVG width={35} height={35} fill={iconMainColor} />
              </View>
              <Text className="text-xl font-medium ml-6">Backup & Sync</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <LockSVG width={35} height={35} fill={iconMainColor} />
              </View>
              <Text className="text-xl font-medium ml-6">
                PIN and Biometrics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-t border-gray-300 items-center h-28">
              <View className="bg-s_blue-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <SettingsSVG width={35} height={35} fill={iconMainColor} />
              </View>
              <Text className="text-xl font-medium ml-6">Settings</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-3xl ml-10 mt-4 color-s_red-100">DANGER</Text>
          <View className="mx-10 mt-4 bg-s_light-100 rounded-3xl">
            <TouchableOpacity className="flex-row items-center h-28">
              <View className="bg-s_red-20 rounded-3xl w-16 h-16 ml-6 flex justify-center items-center">
                <TrashSVG width={35} height={35} fill={iconDangerColor} />
              </View>
              <Text className="text-xl font-medium ml-6 color-s_red-100">
                Erase Data & Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View className="h-60 flex-1" />
        </ScrollView>
      </SafeAreaInsetsView>
    </View>
  );
};
