import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import {Card, Image, Text } from "@rneui/base";
import { useEffect, useState } from "react";
import {View, } from "react-native";
import { StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const Perfil = () => {

    const [image, setImage] = useState("https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/07/inteligencia-artificial-my-hero-academia-uraraka.jpg")

    const selectImage = async () => {
        const result = await ImagePicker.launchCameraAsync({
            quality:1,
            allowsEditing: true,
            aspect:[3,4],
            mediaTypes: ImagePicker.MediaTypeOptions.All
        });

        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }
    return(
        <View style={styles.container}>
            <Image 
            onPress={selectImage}
            source={{uri: image}}
            style={{width:100, height: 100, borderRadius: 50}}
            />
            <Text>
                Apoco si
            </Text>
        </View>
    )
    /*const route = useRoute();
    const {item} = route.params ? route.params : {username: "No hay usuarios"};
    const [userLogged, setUserlogged] = useState();

    useEffect(()=>{
        console.log(userLogged);
    }, [userLogged]);

    useEffect(()=>{
        getUser = async () =>{
            const get = await AsyncStorage.getItem("userLogged");
            console.log(JSON.parse(get));
            setUserlogged(JSON.parse(get));
        }
    }, []);

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Perfil</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulito}
                    source={item?.userImagen} />
                <Text style={styles.texto}>{item?.username}</Text>
                <Text>{userLogged? userLogged.username: "No se inicio sesion"}</Text>
            </Card>
        </View>
    )*/
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    }
    ,
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

export default Perfil;