import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { React } from "react";
import Pokedex from "./screeens/pokedex";
import Splash from "./screeens/Splash";

const Stack = createStackNavigator;

App = () => {
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Pokedex" component={Pokedex} options={{headerShown: false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;
