module.exports = {
  name: "Salum",
  slug: "salumapp",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./src/assets/icons/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./src/assets/icons/splash.png",
    resizeMode: "contain",
    backgroundColor: "#fff6e5",
    dark: {
      image: "./src/assets/icons/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000115",
    }
  },
  assetBundlePatterns: ["**/*"],
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON
  },
  ios: {
    supportsTablet: true,
    usesIcloudStorage: true,
    bundleIdentifier: "com.salumapp.salumapp",
    infoPlist: {
      NSFaceIDUsageDescription: "This app uses Face ID and Touch ID to verify user's identity and protect sensitive user data"
    },
    googleServicesFile: process.env.GOOGLE_SERVICES_PLIST
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/icons/adaptive-icon.png",
      backgroundColor: "#000115",
    },
    package: "com.salumapp.salumapp",
  },
  plugins: [
    [
      "expo-image-picker",
      {
        photosPermission: "Allow $(PRODUCT_NAME) to access your photos",
        cameraPermission: "Allow $(PRODUCT_NAME) to open the camera",

        "//": "Disables the microphone permission",
        microphonePermission: false,
      },
    ],
    ["expo-document-picker"],
    [
      "expo-local-authentication",
      {
        faceIDPermission: "Allow $(PRODUCT_NAME) to use Face ID."
      }
    ],
    [
      "expo-secure-store",
      {
        faceIDPermission: "Allow $(PRODUCT_NAME) to access your Face ID biometric data."
      }
    ],
    ["@react-native-google-signin/google-signin"],
  ],
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
    eas: {
      projectId: "9f267f65-b3e6-48df-9ec5-519cb2c7c4a5",
    },
  },
  owner: "salumapp",
  scheme: "salum",
  androidStatusBar: {
    translucent: true
  },
};
