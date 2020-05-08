import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

// Assets
import beach from "../../assets/beach.jpg";
import forest from "../../assets/forest.jpg";
import mountain from "../../assets/mountain.jpg";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail id="1" imageTitle="Forest" imageSrc={beach} score={9} />
      <ImageDetail id="2" imageTitle="Beach" imageSrc={forest} score={8} />
      <ImageDetail id="3" imageTitle="Mountain" imageSrc={mountain} score={7} />
    </View>
  );
}

const styles = StyleSheet.create({});
