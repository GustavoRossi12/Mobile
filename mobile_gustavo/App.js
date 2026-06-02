
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Entypo from '@expo/vector-icons/Entypo';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Images from "./components/Image";
import ExemploAsyncStorage from "./Screens/ExemploAsyncStorage";
import Exemplo1AsyncStorage from "./Screens/Exemplo1AsyncStorage";
import Produtos from "./Screens/Produtos";

function TabNavigate(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen  name="Home" component={Home}options={{
                tabBarIcon: () => (
                  <Entypo name="login" size={24} color="#c750b9ff" />
                )
              }}/>
      <Tab.Screen  name="Imagens" component={Images}/>
      <Tab.Screen name="Async2" component={Exemplo1AsyncStorage}/>
      <Tab.Screen name="Produtos" component={Produtos}/>
    </Tab.Navigator>
  )
}
export default function App(){
    const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={TabNavigate}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}