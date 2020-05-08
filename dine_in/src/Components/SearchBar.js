import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar(props) {
    // console.log(props)
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style = {styles.iconStyle} />
      <TextInput 
        autoCapitalize = "none"
        onEndEditing = {(newTerm) => props.onTermSubmit(newTerm)}
        value = {props.search}
        onChangeText = {newTerm => props.onTermChange(newTerm)}
        style = {styles.inputStyle} 
        placeholder="Search.." />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop : 15,
    marginBottom : 10
  },
  inputStyle : {
      flex : 1,
      fontSize : 18
  },
  iconStyle : {
      fontSize : 35,
      alignSelf : 'center',
      marginHorizontal : 10
  }
});
