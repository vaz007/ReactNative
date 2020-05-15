import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

import MapView, { Polyline } from "react-native-maps";

export default function TrackDetailScreen({ navigation }) {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text style={{ fontSize: 35 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords
        }}
        style = {styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
}

const styles =  StyleSheet.create ({
    map : {
        height : 300
    }
})