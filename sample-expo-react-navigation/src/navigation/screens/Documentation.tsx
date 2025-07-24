import { Text } from '@react-navigation/elements';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';

export function Documentation() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Qualtrics Documentation</Text>
      </View>
      
      <Text style={styles.text}>
        Explore the comprehensive Qualtrics React Native SDK documentation to implement surveys, 
        intercepts, and app feedback in your mobile application.
      </Text>

      <Text 
        style={styles.link}
        onPress={() => Linking.openURL('https://api.qualtrics.com/f23ebb864cba1-getting-started-with-react-native-sdk')}>
        View Getting Started Guide
      </Text>
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
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
