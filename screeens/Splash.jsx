import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
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
            <Image 
            style={style.logo}
            source={require('../assets/ochaco.png')} />
            <LottieView 
            source={require('../assets/Animation - 1707957463699.json')}
            autoPlay={true}
            loop={true}
            style={style.loadingAnimation}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cargando....</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingAnimation:{
        width: 100,
        height:100,
        resizeMode:'contain'
    },
    logo:{
        width: 200,
        height:200,
        resizeMode:'contain'
    }
})
export default Splash;