import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Qualtrics SDK Demo</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Screen tracking & evaluation</ThemedText>
        <ThemedText>
          In this sample all screen changes are tracked and the evaluation logic is triggered on each of them. 
        </ThemedText>        
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Testing Recommendation</ThemedText>
        <ThemedText>
          We suggest testing the example applications using the Intercept with Display/Targeting Logic 
          set up to:
        </ThemedText>
        <ThemedView style={styles.testingTip}>
          <ThemedText type="defaultSemiBold">If View Count Total Views Greater Than or Equal to 1</ThemedText>
        </ThemedView>
        <ThemedText>
          That way, the intercept will show with every call of registerViewVisit making 
          it easy to test. This ensures your surveys appear consistently during development and testing phases.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    fontStyle: 'italic',
    opacity: 0.7,
    marginTop: 8,
  },
  testingTip: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
