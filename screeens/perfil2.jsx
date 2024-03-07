import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import {Card, Image, Text } from "@rneui/base";
import { useEffect, useState } from "react";
import {View, } from "react-native";
import { StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const Perfil2 = () => {
    const route = useRoute();
    console.log(route);
    const {user2} = route.params
    console.log(user2);

    return(
        <View style={styles.container}>
            <Image 
            source={user2.i}
            style={{width:100, height: 100, borderRadius: 50}}
            />
            <Text>
                {user2.username} {user2.e}
            </Text>
        </View>
    )
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

export default Perfil2;