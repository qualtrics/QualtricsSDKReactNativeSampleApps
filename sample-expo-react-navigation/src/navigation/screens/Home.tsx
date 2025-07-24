import { Text } from '@react-navigation/elements';
import { StyleSheet, View, ScrollView } from 'react-native';

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Qualtrics SDK Demo</Text>
      </View>
      
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Screen tracking & evaluation</Text>
        <Text style={styles.text}>
          In this sample all screen changes report the view visit and trigger the evaluation logic. 
        </Text>        
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Testing Recommendation</Text>
        <Text style={styles.text}>
          Setup your credentials in:
        </Text>
        <Text style={styles.link}>constants/QualtricsConfig.ts.</Text>
        <Text style={styles.text}>
          We suggest testing the example applications using the Intercept with Display/Targeting Logic 
          set up to:
        </Text>
        <View style={styles.testingTip}>
          <Text style={styles.tipText}>If View Count Total Views Greater Than or Equal to 1</Text>
        </View>
        <Text style={styles.text}>
          That way, the intercept will show with every call of registerViewVisit making 
          it easy to test. This ensures your surveys appear consistently during development and testing phases.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
  },
  testingTip: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  tipText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
