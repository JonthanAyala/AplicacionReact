import { Button, Card, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
import monachina from "../animations/Animation - 1707957463699.json"

/*
import Lottie from "lottie-react"

<Lottie animationData={groovyWalkAnimation} />


<Image
                    style={styles.circulito}
                    source={{ uri: 'https://play-lh.googleusercontent.com/1oKIe8RjSYLWRtNbXofA_ItvuZ17afSayJl4U39k3io72zw8qyUYS39JEL2_tOLfnqE=w240-h480-rw' }} />
*/


const Login = () => {
    let [userName, setUserName] = useState('');
    let [pass, setUserPass] = useState('');
    const navigation = useNavigation();

    const validUser = { user: 'Ayala', pass: '123' };
    let intentos = 0;

    const validateUser = (userName, pass, navigation) => {
        if (intentos >= 3) {
            Alert.alert(
                'Demasiados intentos!',
                `Usuario bloqueado por 30 minutos`,
                [{ text: 'Ok' }]
            );
            console.log(intentos);
        } else {
            if (userName === validUser.user && pass === validUser.pass) {
                console.log(intentos);
                navigation.navigate('Pokedex');
            } else {
                if (intentos >= 3) {
                    Alert.alert(
                        'Demasiados intentos!',
                        `Usuario bloqueado por 30 minutos`,
                        [{ text: 'Ok' }]
                    );
                    console.log(intentos);
                } else {
                    Alert.alert(
                        'Usuario incorrecto!',
                        `Tienes ${3 - intentos} intentos restantes.`,
                        [{ text: 'Ok', onPress: () => { intentos++ } }]
                    );
                    console.log(intentos);
                }
            }
        }
    };


    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Iniciar sesion</Card.Title>
                <Card.Divider />
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#eee',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../animations/Animation - 1707957463699.json')}
                />
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
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    circulito: {
        height: 100,
        width: 100,
        borderRadius: 300,
        margin: 20
    },
    texto: {
        fontSize: 15,
        margin: 20
    }
})

export default Login;