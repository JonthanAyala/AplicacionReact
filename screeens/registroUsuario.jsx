import { Button, Card, Image } from "@rneui/base";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

const registroUsuario = () => {
    let [user, setUser] = useState('');
    let [edad, setEdad] = useState('');
    let [image, setImage] = useState("")

    const navigation = useNavigation();

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            allowsEditing: true,
            aspect: [3, 4],
            mediaTypes: ImagePicker.MediaTypeOptions.All
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }
    const registro = () => {
            const user2 = { username: user, e : edad, i : image}
            navigation.navigate('Perfil2', {user2});
    }
    return (
        <View>
            <Card>
                <Card.Title>Iniciar sesion</Card.Title>
                <Card.Divider />
                <Image
                    onPress={selectImage}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={image} />
                <TextInput
                    style={styles.texto}
                    placeholder="Usuario"
                    onChangeText={setUser}
                />
                <TextInput
                    onChangeText={setEdad}
                    style={styles.texto}
                    placeholder="Edad"
                />
                <Button title={'Registrar'} color={'#009475'}
                    onPress={registro} />

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
    texto: {
        fontSize: 15,
        margin: 20
    }
});
export default registroUsuario;