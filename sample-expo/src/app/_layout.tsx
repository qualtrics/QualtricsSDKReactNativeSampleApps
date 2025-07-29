import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import * as Qualtrics from '@/integrations/QualtricsWrapper'; 
import { QualtricsProjectInfo } from '@/constants/QualtricsConfig';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  useEffect(() => {
    Qualtrics.setProjectInfo(QualtricsProjectInfo);
  }, []);

  // Track the screen change and evaluate the project
  useEffect(() => {
    Qualtrics.registerViewVisit(pathname);
    Qualtrics.evaluateAndDisplayProject().catch(error => 
      console.error("Failed to evaluate and display project:", error)
    );
  }, [pathname]);

  const [loaded] = useFonts({
    SpaceMono: require('@assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
