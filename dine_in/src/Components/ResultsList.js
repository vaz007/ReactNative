import React from "react";
import {withNavigation} from 'react-navigation';
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

import ResultDetail from "./ResultDetail";
import { TouchableOpacity } from "react-native-gesture-handler";

// receiving navigation props 
//from react navigation function withNavigation

function ResultsList(props) {
if(!props.results.length){
    return null;
}
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={props.results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Results", {id : item.id})}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList)