import { Assets as NavigationAssets } from "@react-navigation/elements";
import {
  DarkTheme,
  DefaultTheme,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useRef } from "react";
import { useColorScheme } from "react-native";
import { Navigation } from "@/navigation";
import * as Qualtrics from "@/integrations/QualtricsWrapper";
import { QualtricsProjectInfo } from "@/constants/QualtricsConfig";

Asset.loadAsync([
  ...NavigationAssets,
  require("@/assets/newspaper.png"),
  require("@/assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  const colorScheme = useColorScheme();
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string | undefined>(undefined);
  
  useEffect(() => {
    Qualtrics.setProjectInfo(QualtricsProjectInfo);
  }, []);

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <Navigation
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
        SplashScreen.hideAsync();
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (currentRouteName && previousRouteName !== currentRouteName) {
          Qualtrics.registerViewVisit(currentRouteName);
        }

        routeNameRef.current = currentRouteName;
        Qualtrics.evaluateAndDisplayProject().catch(error =>
          console.error("Failed to evaluate and display project:", error)
        );
      }}
      theme={theme}
      linking={{
        enabled: "auto",
        prefixes: ["samplereactnavigationapp://"],
      }}
    />
  );
}
