import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Profile } from './components/profile';
import { Person } from './components/profile';
import { Gus } from './components/profile';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      <Profile />
      <Person />
      <Gus />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8af092ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
