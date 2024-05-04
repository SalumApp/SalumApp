import "react-native-gesture-handler";
import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { RealmProvider } from "@realm/react";
import Constants from "expo-constants";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  createContext,
} from "react";
import "./global.css";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomTabNavigator from "./BottomTabNavigator";
import { OnBoardingStackNavigator } from "./StackNavigators";
import { schemas } from "./src/models";
import PinInput from "./src/pages/PinInputPage";
import { base64ToBytes } from "./src/utils/Misc";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "Require cycle",
  "Realm",
  "realm",
]);

export interface OnBoardingContextType {
  isFirstLaunch: boolean;
  completeOnboarding: () => void;
  setRealmKey: React.Dispatch<any>;
}

const defaultContextValue: OnBoardingContextType = {
  isFirstLaunch: false,
  completeOnboarding: () => {}, // empty function as a placeholder
  setRealmKey: () => {},
};

const OnBoardingContext =
  createContext<OnBoardingContextType>(defaultContextValue);

export const useOnBoardingContext = () => useContext(OnBoardingContext);

async function checkFirstLaunch() {
  try {
    const hasFirstLaunched = await AsyncStorage.getItem("salum.user.onboarded");
    return hasFirstLaunched === null;
  } catch (e) {
    console.error(e);
    return false;
  }
}

function App() {
  const tabBarRef = useRef(null);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isFirstLaunchLoading, setIsFirstLaunchLoading] = useState(true);
  const [isBioAuthSupported, setIsBioAuthSupported] = useState(false);
  const [isBioAuthEnrolled, setIsBioAuthEnrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [realmKey, setRealmKey] = useState(null);

  const completeOnboarding = () => {
    setIsFirstLaunch(false);
    setIsAuthenticated(true);
  };

  const fetchSecureItem = async () => {
    try {
      const result = await SecureStore.getItemAsync("salum.databaseKey");
      setRealmKey(base64ToBytes(result));
    } catch (error) {
      console.error("Failed to load the secure item", error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchFirstLaunch = async () => {
      try {
        const firstLaunch = await checkFirstLaunch();
        if (isMounted) {
          setIsFirstLaunch(firstLaunch);
          console.log("isFirstLaunch", isFirstLaunch);
          setIsFirstLaunchLoading(false);
        }
      } catch (error) {
        console.error("Failed to check first launch:", error);
      }
    };
    fetchFirstLaunch();
    return () => {
      isMounted = false;
    };
  });

  useEffect(() => {
    fetchSecureItem();
  }, []);

  useEffect(() => {
    const getBioAuthSupport = async () => {
      const result = await LocalAuthentication.hasHardwareAsync();
      setIsBioAuthSupported(result);
      console.log("isBioAuthSupported", result);
    };
    getBioAuthSupport();
  });

  useEffect(() => {
    const getBioAuthEnroll = async () => {
      const result = await LocalAuthentication.isEnrolledAsync();
      setIsBioAuthEnrolled(result);
      console.log("isBioAuthEnrolled", result);
    };
    if (isBioAuthSupported) {
      getBioAuthEnroll();
    }
  }, [isBioAuthSupported]);

  useEffect(() => {
    const getAuthentication = async () => {
      const result = await LocalAuthentication.authenticateAsync();
      setIsAuthenticated(result.success);
      console.log("Authentication result", result);
    };
    if (!isFirstLaunch && isBioAuthSupported && isBioAuthEnrolled) {
      getAuthentication();
    }
  }, [isBioAuthEnrolled]);

  // const onAuthenticate = () => {
  //   LocalAuthentication.authenticateAsync().then((result) => {
  //     setIsAuthenticated(result.success);
  //     console.log(result);
  //   });
  // }

  if (isFirstLaunchLoading) {
    // return <LoadingScreen />; // Show a loading screen while checking if it's the first launch
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <OnBoardingContext.Provider
          value={{ isFirstLaunch, completeOnboarding, setRealmKey }}
        >
          {isFirstLaunch ? (
            <OnBoardingStackNavigator />
          ) : isAuthenticated && realmKey ? (
            <RealmProvider schema={schemas} encryptionKey={realmKey}>
              <BottomTabNavigator tabRef={tabBarRef} />
            </RealmProvider>
          ) : (
            <PinInput setAuthentication={() => setIsAuthenticated(true)} />
          )}
        </OnBoardingContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
