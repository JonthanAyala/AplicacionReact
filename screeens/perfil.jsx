import { useRoute } from "@react-navigation/native";
import {Card, Image, Text } from "@rneui/base";
import {View } from "react-native";
import { StyleSheet } from "react-native";


const Perfil = () => {
    const route = useRoute();
    const {item} = route.params ? route.params : {username: "No hay usuarios"};

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Perfil</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulito}
                    source={item?.userImagen} />
                <Text style={styles.texto}>{item?.username}</Text>
            </Card>
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

export default Perfil;