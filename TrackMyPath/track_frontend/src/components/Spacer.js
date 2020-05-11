import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

// The only moto of this file
// is to add margins and padding to the components
export default function Spacer({ children }) {
  return <View style={styles.spacer}>{children}</View>;
}

const styles = StyleSheet.create({
  spacer: {
    margin: 10,
  },
});
