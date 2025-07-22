import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import * as Qualtrics from '@/utils/QualtricsWrapper';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  Qualtrics.setProjectInfo({
    brandID: '', // Replace with your actual Brand ID
    projectID: '', // Replace with your actual Project ID\
    interceptID: '', // Replace with your actual Intercept ID
    extRefId: '', // Optional external reference ID
  });  

  // Initialize Qualtrics project as soon as the app is loaded
  useEffect(() => {
    Qualtrics.initialize().catch(console.error);
  }, []);

  // Track the screen change and evaluate the project
  useEffect(() => {
    Qualtrics.registerViewVisit(pathname);
    Qualtrics.evaluateAndDisplayProject();
  }, [pathname]);

  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
