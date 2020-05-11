import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
export default function TrackListScreen({navigation}) {
    return (
        <View>
        <Text>Track List Screen</Text>

        <TouchableOpacity onPress={() => navigation.navigate("TrackDetail")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Track Detail Demo</Text>
        </View>
      </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      marginBottom: 30,
    },
    buttonStyle: {
      backgroundColor: "darkorange",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      marginBottom: 25,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });
  