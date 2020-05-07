import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListScreen() {
  const friends = [
    {
      name: "Friend 1",
      Age : 20,
    },
    {
      name: "Friend 2",
      Age : 20,
    },
    {
      name: "Friend 3",
      Age : 20,
    },
    {
      name: "Friend 4",
      Age : 20,
    },
    {
      name: "Friend 5",
      Age : 20,
    },
    {
      name: "Friend 6",
      Age : 20,
    },
    { name: "Friend 7",
    Age : 20,
     },
    {
        name: "Friend 8",
        Age : 20,
      },
    
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
              <View>
            <Text style = {styles.textStyle}>{item.name} - Age {item.Age}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});
