import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

import { Color } from "../GlobalStyles";

const NavBar = ({
  magiconsGlyphUserInterfac,
  magiconsGlyphFinancetrans,
  glyphFinancewallet,
  meeting,
  add,
}) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: "0%",
        width: "100%",
        alignSelf: "center",
        height: 60,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          paddingHorizontal: 28,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 9,
            marginBottom: 9,
          }}
        >
          <Image
            source={magiconsGlyphUserInterfac}
            style={{
              width: 23,
              height: 23,
              marginRight: 45,
            }}
          />
          <Image
            source={magiconsGlyphFinancetrans}
            style={{
              width: 27,
              height: 21,
            }}
          />
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          />
          <Image
            source={glyphFinancewallet}
            style={{
              width: 23,
              height: 23,
              marginRight: 48,
            }}
          />
          <Image
            source={meeting}
            style={{
              width: 20,
              height: 23,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Color.blueBlue100,
              fontSize: 10,
              fontFamily: "Inter_700Bold",
              marginRight: 25,
            }}
          >
            Home
          </Text>
          <Text
            style={{
              color: "#c5c5c5",
              fontSize: 10,
              fontFamily: "Inter_700Bold",
            }}
          >
            Transactions
          </Text>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          />
          <Text
            style={{
              color: "#c5c5c5",
              fontSize: 10,
              fontFamily: "Inter_700Bold",
              marginRight: 38,
            }}
          >
            Budget
          </Text>
          <Text
            style={{
              color: "#c5c5c5",
              fontSize: 10,
              fontFamily: "Inter_700Bold",
            }}
          >
            Split
          </Text>
        </View>
      </View>
      <Image
        source={add}
        style={{
          height: "127%",
          bottom: "7%",
          width: "19%",
          position: "absolute",
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default NavBar;
