import { Button, Card, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, TextInput, View, Tex } from "react-native";
import { StyleSheet } from "react-native";
import { Firebase } from "../config/firebase";


const Login = () => {

    let [userName, setUserName] = useState('');
    let [pass, setUserPass] = useState('');
    const navigation = useNavigation();
    
    const {appFirebase} = Firebase();

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