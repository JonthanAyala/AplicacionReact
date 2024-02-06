import { StyleSheet, Text, View, Image, Button } from 'react-native';
const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
let image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOC-YVzELc4p6YCInWjbQ57mmrsOd5qZcDw&usqp=CAU'
let name = 'YO'

const getPokemon = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      img = data.sprites.front_default;
      name = data.name;
    }
  } catch (error) {

  }
}

App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.circulito} source={{ uri: image, }}/>
      <Text style={{marginTop: 20, marginBottom:20, fontSize: 20}}>Pokemon: {name}</Text>
      <Button color={'green'} title='Llamar pokemon!' onPress={getPokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 20
  },
  circulito: {
    height: 150,
    width: 150,
    backgroundColor: 'black',
    borderRadius: 100
  },
});


export default App();