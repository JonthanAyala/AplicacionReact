import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, View } from 'react-native'

const Splash = () => {

    const navigation = useNavigation();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
        return () => clearTimeout(timeoutId);
    }, [navigation])

    return (
        <View style={style.container}>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Si quedo :3</Text>
            <Image style={{width:150, height:250}}
            source={{ uri: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/My-Hero-Academia-Asi-eran-los-primeros-bocetos-de-Ochaco-Uraraka-la-alegre-estudiante-de-la-Clas-1-A.png?fit=1280%2C720&quality=80&ssl=1' }} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        margin: 20,
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Splash;