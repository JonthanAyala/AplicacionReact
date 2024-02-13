import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import{StyleSheet, View} from 'react-native'

const Splash = () => {

    const navigation = useNavigation();
    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            navigation.replace('Pokedex')
        },3000)
        return ()=> clearTimeout(timeoutId);
    },[navigation])

    return(
        <View>
            <Image source={{uri: 'https://media1.tenor.com/m/WLZYQqLom-EAAAAC/ochaco-uraraka-ochaco.gif'}} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
    },
})
export default Splash;