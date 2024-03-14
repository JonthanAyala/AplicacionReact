import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, SectionList, Touchable, TouchableOpacity } from "react-native";
import { StatusBar, StyleSheet, Text, View } from "react-native"

const Post = () => {
    const navigation = useNavigation();

    const [posts, setPosts] = useState([
        {
            image: require("../assets/ochaco2.webp"), description: "Perder no es opcion",
            likes: 0, username: "Ochaco Uraraka", userImagen: require("../assets/ochaco2.webp")
        },
        {
            image: require("../assets/yoru1.jpeg"), description: "WASAAAAA",
            likes: 50, username: "Yoru", userImagen: require("../assets/yoru2.jpeg")
        },
        {
            image: require("../assets/ochaco.png"), description: "Compren en mercadito Utez",
            likes: 100, username: "Ochaco Uraraka", userImagen: require("../assets/ochaco2.webp")
        },
        {
            image: require("../assets/yoru3.png"), description: "Yo y los papus",
            likes: 200, username: "Yoru", userImagen: require("../assets/yoru2.jpeg")
        }
    ]);


    const likePost = (index) => {
        setPosts(prevPosts => {
            const updatedPosts = [...prevPosts];
            updatedPosts[index] = { ...updatedPosts[index], likes: updatedPosts[index].likes + 1 };
            return updatedPosts;
        });
    };

    const gotoUser = (item)=> {
        navigation.navigate('Perfil', {item});
    }
    return (

        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}
                backgroundColor='#089779' />
            <View>
                <SectionList
                    sections={[{ title: "POST", data: posts }]}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => (
                        <View style={styles.cardPost}>
                            <TouchableOpacity onPress={()=> gotoUser(item)}>
                            <View style={styles.userInfo}>
                                <Image style={styles.profilePhoto}
                                    source={item.userImagen} />
                                <Text style={styles.username}>{item.username}</Text>
                            </View>
                            </TouchableOpacity>
                            <View>
                                <Image style={styles.postImage}
                                    source={item.image}
                                />
                            </View>
                            <View style={styles.icons}>
                                <TouchableOpacity onPress={()=>likePost(index)}>
                                <AntDesign name="heart" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 7
                                }}>
                                    {item.likes} Personas le gustan
                                </Text>
                            </View>
                            <View style={styles.description}>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    {item.username}:
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 5
                                }}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3
    },
    cardPost: {
        flex: 1,
        backgroundColor: "#ecdbce",
        width: 'auto',
        height: 'auto',
        margin: 10
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        margin: 5
    },
    username: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5
    },
    postImage: {
        width: 300,
        height: 200
    },
    description:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 3
    }
})


export default Post;