import React from "react";
import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={styles.text}>Track My Path Application</Text>

      {/* Used Touchable Opacity instead of buttton 
      because it has more style properties */}

      {/* <TouchableOpacity onPress={() => navigation.navigate("Component")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Go to Components Demo</Text>
        </View>
      </TouchableOpacity> */}

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
