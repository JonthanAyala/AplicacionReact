import { useNavigation } from "@react-navigation/native";
import { Button, Card, Image, Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, Alert, TextInput, ScrollView, SectionList, Modal } from 'react-native';

const Pokedex = () => {
    const navigation = useNavigation();

    const irAplash = () => {
        navigation.navigate('Splash');
    }
    const [name, setName] = useState('ditto');
    const [image, setImage] = useState('https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_570xN.3584257734_bfy9.jpg')
    const [pokemons, setPokemon] = useState([]);
    const [modal, setModalVisible] = useState(false);
    const [selectPokemon, setSelectecPokemon] = useState({});

    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    const getPokemon = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const pokemonNames = pokemons.map(p => p.name);
                if (pokemonNames.includes(data.name)) {
                    Alert.alert(
                        '¡Pokémon repetido!',
                        `Ya has buscado a ${data.name} antes.`,
                        [{ text: 'OK', onPress: () => setName('') }]
                    );
                    setImage(data.sprites.front_default);
                    setName(data.name);
                    setPokemon(prevPokemon => [...prevPokemon, data]);
                } else {
                    setImage(data.sprites.front_default);
                    setName(data.name);
                    setPokemon(prevPokemon => [...prevPokemon, data]);
                }
            } else {
                Alert.alert('¡No encontramos a tu Pokémon!',
                    `El pokémon con el nombre: ${name} aún no está registrado`,
                    [
                        { text: 'OK', onPress: () => setName('Ditto') }
                    ]);
            }
        } catch (error) {

        }
    }
    const abrirModal = (pokemon) => {
        setSelectecPokemon(pokemon);
        setModalVisible(true);

    }



    return (
        <View style={styles.container}>
            <Card containerStyle={{
                backgroundColor: 'white',
                borderRadius: 20
            }}>
                <Card.Title style={{
                    fontWeight: 'bold',
                    color: 'black'
                }}>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</Card.Title>
                <Card.Divider />
                <View style={styles.center}>
                    <Image style={styles.imagen}
                        source={{ uri: image }} />
                </View>
                <Card.Divider />
                <View style={styles.center}>
                    <TextInput
                        onChangeText={setName}
                        placeholder='Introduce el nombre de un Pokémon'
                        style={{
                            fontSize: 15,
                            marginBottom: 20,
                            width: 200,
                            color: 'black',
                        }} />
                    <Button title={'Buscar Pokémon'}
                        color={'black'} style={{ borderRadius: 20 }} onPress={getPokemon} />
                </View>
            </Card>

            <Button 
            title={'Ir a Splash'}
            style={{ width: 200 }} color={'secondary'}
                onPress={irAplash} />
            <SectionList
                sections={[{
                    title: 'Lista de Pokemons',
                    data: pokemons
                }]}
                KeyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (

                    <Card
                        containerStyle={{
                            backgroundColor: 'white',
                            borderRadius: 20
                        }}>
                        <Card.Title style={{
                            fontWeight: 'bold',
                            color: 'black'
                        }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</Card.Title>
                        <Card.Divider />
                        <View style={styles.center}>
                            <Image style={styles.imagen}
                                source={{ uri: item.sprites.front_shiny }}
                                onLongPress={() => abrirModal(item)}
                                onPressOut={() => setModalVisible(false)}
                            />
                        </View>
                    </Card>

                )}
            />

            <Modal animationType='fade'
                transparent={true}
                visible={modal}
            >
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {selectPokemon?.name}
                    </Text>
                    <Image style={styles.imagen}
                        source={{ uri: selectPokemon?.sprites?.other?.home?.front_default }} />
                </View>

            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    imagen: {
        height: 150,
        width: 150,
        marginBottom: 20,
        borderRadius: 20
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgb(161 161 161)',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});

export default Pokedex;