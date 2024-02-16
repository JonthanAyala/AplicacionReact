import {Card, Image, Text } from "@rneui/base";
import {View } from "react-native";
import { StyleSheet } from "react-native";


const Perfil = () => {
    const User = { name: 'Ayala', email: '20223tn085@utez.edu.mx' };
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Iniciar sesion</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulito}
                    source={{ uri: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/My-Hero-Academia-Asi-eran-los-primeros-bocetos-de-Ochaco-Uraraka-la-alegre-estudiante-de-la-Clas-1-A.png?fit=1280%2C720&quality=80&ssl=1' }} />
                <Text style={styles.texto}>Nombre: {User.name}</Text>
                <Text style={styles.texto}>Email: {User.email}</Text>
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