import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ColorCounter(props) {
    
  return (
    <View>
      <Text>{props.textColor}</Text>
      <TouchableOpacity onPress = {() =>props.onIncrease()}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Increase {props.textColor}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => props.onDecrease() }>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Decrease {props.textColor}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 30,
    fontSize: 30,
  },
  buttonStyle: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
