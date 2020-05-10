import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Context } from "../Context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
export default function ShowScreen({ navigation }) {
  console.log(navigation.getParam("id"));
  const { state } = useContext(Context);
  let blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam("id");
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});
