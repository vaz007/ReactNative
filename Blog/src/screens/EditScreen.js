import React, { useContext, useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Context } from "../Context/BlogContext";

export default function EditScreen({ navigation }) {
  const { state, editBlogPost } = useContext(Context);
  let blogPost = state.find((blogPost) => {
    return blogPost.id === navigation.getParam("id");
  });

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

 console.log(title, content)
//  console.log(navigation.getParam("id"));
  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
       <TouchableOpacity
        onPress={() => {
          editBlogPost(navigation.getParam("id"), title, content, () => {
              console.log("inside edit function", title, content)
              navigation.pop();
          });
        }}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Create Blog Post</Text>
        </View>
      </TouchableOpacity>
   
    
    
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 15,
      padding: 5,
      margin: 5,
    },
    labels: {
      fontSize: 25,
      marginBottom: 10,
      marginLeft: 15,
    },
    buttonStyle: {
      backgroundColor: "darkorange",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      marginBottom: 25,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });
  