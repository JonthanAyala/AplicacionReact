import React, { useState } from 'react';
import { StyleSheet,View,Alert} from 'react-native';
import { ButtonGroup } from '@rneui/themed';



App = () => {
  const [name, setPokemonName] = useState('ditto');
  const [image, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOC-YVzELc4p6YCInWjbQ57mmrsOd5qZcDw&usqp=CAU');

  const url = `https://pokeapi.co/api/v2/pokemon/ditto${name.toLowerCase()}`;

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        image = data.sprites.front_default_shiny;
        setPokemonName(data.name);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('No hay pokemon asi', `El pokemon con el nombre: ${name}`,
      [
        {text: 'OK',
        onPress: () => {
          setModalVisible(false);
        }}
      ]);
    }
  };

  const mensaje = () => {
    Alert.alert(
      '', '', [
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
      <Card.Title>{name.charAt(0).toLowerCase() + name.slice(1).toLowerCase()}</Card.Title>
      <Card.Divider/>
      <View style={{
        alignItems: 'center'
        
      }}>

      </View>
      <Image style={styles.imagen} source={{uri: image}}/>
      <Card.Divider/>
      <ButtonGroup/>
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