import { SectionList, View } from "react-native"
import { StyleSheet } from "react-native"

const DATA = [
    {
        title: 'Configuracion',
        data: ['Mi perfil',
            'Mis preferencias',
            'Cerrar Sesion']
    }
    
];

const Config = () => {

    return (
        <View style={styles.container}>
            <SectionList sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: title }) => (
                    <Text style={styles.header}>{title}</Text>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
})

export default Config();