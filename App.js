import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { React } from "react";
import Pokedex from "./screeens/pokedex";
import Splash from "./screeens/Splash";
import Login from "./screeens/login";
import BottNav from "./screeens/bottomTabl";

const Stack = createNativeStackNavigator();

App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" options={{ headerShown: false }} >
        <Stack.Screen name="Pokedex" component={Pokedex} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="BottomTab" component={BottNav} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
