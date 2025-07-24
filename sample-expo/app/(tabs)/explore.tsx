import { StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="doc.text"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Qualtrics Documentation</ThemedText>
      </ThemedView>
      <ThemedText>
        Explore the comprehensive Qualtrics React Native SDK documentation to implement surveys, 
        intercepts, and app feedback in your mobile application.
      </ThemedText>
      <ExternalLink href="https://api.qualtrics.com/f23ebb864cba1-getting-started-with-react-native-sdk">
          <ThemedText type="link">View Getting Started Guide</ThemedText>
        </ExternalLink>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  featureList: {
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 12,
  },
});
