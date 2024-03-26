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
      "expo-font",
      {
        fonts: ["./src/assets/fonts/Inter-Black.otf",
          "./src/assets/fonts/Inter-BlackItalic.otf",
          "./src/assets/fonts/Inter-Bold.otf",
          "./src/assets/fonts/Inter-BoldItalic.otf",
          "./src/assets/fonts/Inter-ExtraBold.otf",
          "./src/assets/fonts/Inter-ExtraBoldItalic.otf",
          "./src/assets/fonts/Inter-ExtraLight.otf",
          "./src/assets/fonts/Inter-ExtraLightItalic.otf",
          "./src/assets/fonts/Inter-Italic.otf",
          "./src/assets/fonts/Inter-Light.otf",
          "./src/assets/fonts/Inter-LightItalic.otf",
          "./src/assets/fonts/Inter-Medium.otf",
          "./src/assets/fonts/Inter-MediumItalic.otf",
          "./src/assets/fonts/Inter-Regular.otf",
          "./src/assets/fonts/Inter-SemiBold.otf",
          "./src/assets/fonts/Inter-SemiBoldItalic.otf",
          "./src/assets/fonts/Inter-Thin.otf",
          "./src/assets/fonts/Inter-ThinItalic.otf"],
      },
    ],
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
