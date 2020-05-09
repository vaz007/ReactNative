import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context } from "../Context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  // console.log(blogPost)
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: <TouchableOpacity onPress = {() => navigation.navigate("Create")}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>,
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
  },
  buttonStyle: {
    marginTop: 15,
    backgroundColor: "darkorange",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default IndexScreen;
