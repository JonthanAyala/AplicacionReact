import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import productos from "./productos";
import Pokedex from "./pokedex";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Perfil from "./perfil";
import Post from "./post";
import Login2 from "./login2";

const Tab = createBottomTabNavigator();

const BottNav = () => {
    return (
        <Tab.Navigator initialRouteName="Perfil">
            <Tab.Screen name="Post" component={Post}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialIcons name="shopping-cart" color={'#002e60'} size={15} />
                      ),
                }}
            />
            <Tab.Screen name="Pokedex" component={Pokedex}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="pokeball" color={'#002e60'} size={20} />
                      ),
                }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialIcons name="person-4" color={'#002e60'} size={20} />
                      ),
                }}
            />
            <Tab.Screen name="Login2" component={Login2}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: {fontSize: 15},
                    tabBarIcon: () => (
                        <MaterialIcons name="person-4" color={'#002e60'} size={20} />
                      ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottNav;