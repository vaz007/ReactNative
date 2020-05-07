import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function ImageDetail(props) {
  return (
    <View>
      <Text>{props.imageTitle}</Text>
      <Image source={props.imageSrc} />
      <Text>Image Score - {props.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
 