import React, { useState } from "react";
import { Button, StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  // console.log(colors);
  return (
    <View>
      {/* <View style={styles.buttonStyle}>
          </View>
          <Text style={styles.buttonText}>Add a Color</Text> */}
      <TouchableOpacity
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Add a Color</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
          //  console.log(item)
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }}>
              <Text>Hey</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "darkorange",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 25,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
