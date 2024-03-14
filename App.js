import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Pokedex from "./screeens/pokedex";
import Splash from "./screeens/Splash";
import Login from "./screeens/login";
import BottNav from "./screeens/bottomTabl";
import Adios from "./screeens/hola";
import registroUsuario from "./screeens/registroUsuario";
import Perfil2 from "./screeens/perfil2";
import { MapScreen } from "./screeens/mapScreen";

const Stack = createNativeStackNavigator();

App = () => {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" options={{ headerShown: false }} >
        <Stack.Screen name="Pokedex" component={Pokedex} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="BottomTab" component={BottNav} options={{headerShown: false}} />
        <Stack.Screen name="Hola" component={Adios} options={{headerShown: false}} />
        <Stack.Screen name="registro" component={registroUsuario} options={{headerShown: false}}/>
        <Stack.Screen name="Perfil2" component={Perfil2} options={{headerShown: false}}/>
        <Stack.Screen name="Mapa" component={MapScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;
