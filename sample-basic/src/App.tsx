/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { TouchableOpacity, StatusBar, StyleSheet, useColorScheme, View, Text, SafeAreaView } from 'react-native';
import * as Qualtrics from './integrations/QualtricsWrapper';
import { interceptID, QualtricsProjectInfo } from './constants/QualtricsConfig';
import { useEffect } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Qualtrics.setProjectInfo({
      brandID: QualtricsProjectInfo.brandID,
      projectID: QualtricsProjectInfo.projectID,
    });
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Qualtrics SDK Demo</Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Testing Recommendation</Text>
          <Text style={styles.text}>
            Setup your credentials and intercept ID in <Text style={styles.link}>constants/QualtricsConfig.ts</Text>
          </Text>
          <Text style={styles.text}>
            We suggest testing the example applications using the Intercept with Display/Targeting Logic 
            set up to:
          </Text>
          <View style={styles.testingTip}>
            <Text style={styles.tipText}>If Time Spent in App Greater Than 10 Seconds</Text>
          </View>
          <Text style={styles.text}>
            The button below will evaluate and display the intercept if the time spent in the app is greater than 10 seconds.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => 
            Qualtrics.evaluateAndDisplayIntercept(interceptID).catch(error => 
              console.error("Failed to evaluate and display intercept:", error)
            )
          }
        >
          <Text style={styles.buttonText}>Display Intercept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  section: {
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 6,
  },
});

export default App;
