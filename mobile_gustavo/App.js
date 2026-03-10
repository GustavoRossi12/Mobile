import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Profile } from './components/profile';
import { Person } from './components/profile';
import { Gus } from './components/profile';
import  Images  from './components/image';
import Login from "./components/login";

export default function App() {
  return (
    <View style={styles.container}>
      
      <Login />
      {/*<Text style={styles.txt_title}>john egbert</Text>
      <Images></Images>
      <Images></Images>
      <Images></Images>
       <Profile />
      <Person />
      <Gus />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8af092ff',
    alignItems: 'center',
    justifyContent: 'space_around',
  },

  txt_title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffff',
  }
});
