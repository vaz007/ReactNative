import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

//Adding props of results
export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom : 5
  },
  nameStyle: {
    fontWeight: "bold",
  },
});
