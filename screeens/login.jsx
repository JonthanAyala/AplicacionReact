import { Button, Card, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { Backend } from "../config/backendconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Login = () => {

    let [userName, setUserName] = useState('');
    let [pass, setUserPass] = useState('');
    const navigation = useNavigation();
    
    const {url} = Backend();

    const validUser = { user: 'Ayala', password: '123' };
    let intentos = 0;

    const validateUser = () => {
        if (intentos > 3) {
            Alert.alert('Demasiados intentos',
                `Usuario bloqueado por 30 minutos`,
                [
                    {
                        text: 'Ok'
                    }
                ]);
        } else {
            if (userName === validUser.user
                && pass === validUser.password) {
                    const data = {username: userName, password: pass}
                    AsyncStorage.setItem("userLogged", JSON.stringify(data));
                navigation.replace('BottomTab');
            } else {
                Alert.alert('Usuario incorrecto',
                    `Tienes ${3 - intentos} intentos restantes `,
                    [
                        {
                            text: 'Ok', onPress: () => {
                                intentos++;
                            }
                        }
                    ]);
            }
        }
    }

    const checkUser = async () => {
        const payload = { username: userName, password: pass};
        const response = await fetch(url+"/login", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(payload)
        });
        if(response.ok && response.status == 200){
            const data = response.json();
            AsyncStorage.setItem("userLogged", JSON.stringify(data));
            //AsyncStorage.removeItem("userLogged");//Remover un item
            //AsyncStorage.getItem("userLogged"); // Obtener un item
            Alert.alert(`Bienvenido ${data.username}`, undefined,[
                {text: "Gracias", onPress: ()=> navigation.replace("BottomTab")}
            ] );
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Iniciar sesion</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulito}
                    source={{ uri: 'https://play-lh.googleusercontent.com/1oKIe8RjSYLWRtNbXofA_ItvuZ17afSayJl4U39k3io72zw8qyUYS39JEL2_tOLfnqE=w240-h480-rw' }} />
                <TextInput
                    style={styles.texto}
                    placeholder="Usuario"
                    onChangeText={setUserName}
                />
                <TextInput
                    onChangeText={setUserPass}
                    style={styles.texto}
                    placeholder="Contrasena"
                />
                <Button title={'Iniciar Sesion'} color={'#009475'}
                    onPress={validateUser} />

            </Card>
        </View>
    )
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

export default Login;