import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentScreen = () => {
  const greeting = "Hi there!";
  const name = "Ankur";
  return (
    <View>
      <Text style={styles.textStyle}>
        We are all just playing inside Component Screen
      </Text>

      <Text style={styles.subHeading}>
        {greeting} Whats Up {name}{" "}
      </Text>
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeading: {
    fontSize: 45,
  },
});
export default ComponentScreen;
