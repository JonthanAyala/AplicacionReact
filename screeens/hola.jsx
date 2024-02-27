const { View, Text } = require("react-native")

const Adios = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{fontWeight: 'bold'}}>Buenos dias</Text>
        </View>
    )
}

export default Adios;