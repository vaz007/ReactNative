import React from "react";
import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={styles.text}>Hi There</Text>

      {/* Used Touchable Opacity instead of buttton 
      because it has more style properties */}

      <TouchableOpacity onPress={() => navigation.navigate("Component")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Components Demo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to List Demo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Image Demo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Count")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Count Demo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Color")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Color Demo</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("Square")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Square Demo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Text")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Text Demo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Box")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Box Demo</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

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

export default HomeScreen;
