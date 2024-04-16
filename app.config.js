module.exports = {
  name: "SalumApp",
  slug: "salumapp",
  version: "0.0.0",
  orientation: "portrait",
  icon: "./src/assets/icons/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./src/assets/icons/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    usesIcloudStorage: true,
    bundleIdentifier: "com.salumapp.salumapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/icons/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.salumapp.salumapp",
  },
  web: {
    favicon: "./src/assets/icons/favicon.png",
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
  ],
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
    eas: {
      projectId: "9f267f65-b3e6-48df-9ec5-519cb2c7c4a5",
    },
  },
  owner: "salumapp",
};
