import { useState } from "react";
import { Button,View } from "react-native";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import Pokedex from "./pokedex";
import Login from "./login";



const Login2 = () => {
    const [user, setUSer] = useState(async () => {
        const get = await AsyncStorage.getItem("userLogged");
            console.log(JSON.parse(get));
            setUSer = JSON.parse(get);
    });

    async function BorrarItem() {
        AsyncStorage.removeItem("userLogged");
        console.log(await AsyncStorage.getItem("userLogged"));
        setUSer(null);
    }

    return (
        <View style={styles.container}>
            {
                user != null ? (
                    <Pokedex />
                ) : (<Login />)
            }
            <Button title={'Limpiar'} color={'#009475'}
                onPress={BorrarItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    circulito: {
        height: 100,
        width: 100,
        borderRadius: 300,
        margin: 20,
        resizeMode: 'contain'
    },
    texto: {
        fontSize: 15,
        margin: 20
    }
})

export default Login2;