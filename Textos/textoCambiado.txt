import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Modal, Alert, TextInput } from 'react-native';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
let image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOC-YVzELc4p6YCInWjbQ57mmrsOd5qZcDw&usqp=CAU'
let name = 'YO'


App = () => {
  const [verModal, setModalVisible] = useState(false);
  const [name, setPokemonName] = useState('YO');
  const [text, changeText] = useState('Ayala');

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        image = data.sprites.front_default;
        setPokemonName(data.name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mensaje = () => {
    Alert.alert(
      'Quien es ese pokemom?', undefined, [
      {
        text: 'No se',
        onPress: () => {
          setModalVisible(false);
        }
      },
      {
        text: 'Es ditto!!',
        onPress: () => {
          getPokemon();
        }
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal visible={verModal}
          animationType='slide'
          onRequestClose={() => setModalVisible(false)} transparent={true}>
          <View style={styles.modalView} >
            <View style={{ left: 0 }}>
              <Button title='X' onPress={() => setModalVisible(false)} />
            </View>
            <Image style={styles.circulito} source={{ uri: image, }} />
            <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 20 }}>Pokemon: {name}</Text>
            <Button color={'green'} title='Llamar pokemon!' onPress={mensaje} />
          </View>
        </Modal>
      </View>
      <Text style={{ fontSize: 50 }}>
        {text}
      </Text>
      <TextInput style={styles.input} value={text} onChangeText={changeText} placeholder='Nombre' />
      <Button onPress={() => setModalVisible(true)} title='Registrarte' color={'black'} />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input: {
    height: 20,
    width: 200,
    borderWidth: 1,
    padding: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
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
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 100,
    padding: 20
  },
  circulito: {
    height: 150,
    width: 150,
    backgroundColor: 'black',
    borderRadius: 100
  },
});

export default App;