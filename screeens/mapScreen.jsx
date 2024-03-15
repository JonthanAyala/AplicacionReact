import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

let i = 1;
export function MapScreen() {
  const [markers, setMarkers] = useState([]);
 
  const selectPlace = (event) => {
    const { coordinate } = event.nativeEvent;
    //const title = `lattitude: ${coordinate.latitude}, longitude: ${coordinate.longitude}`;
    const title = `Marcador ${i}`
    const newMarker = { coordinate, title };
    setMarkers([...markers, newMarker]);
    i++;
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 18.85251438938447,
          longitude: -99.19967518574617,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard"
        onPress={selectPlace}
      >
        {markers.map((marker, index) => (
          <Marker key={index} title={marker.title} coordinate={marker.coordinate} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});