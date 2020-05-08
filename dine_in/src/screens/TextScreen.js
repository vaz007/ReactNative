import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
export default function TextScreen() {
const [name, setName] = useState("")
    return (
      <View>
          <Text>Enter Name</Text>
          <TextInput style = {styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {name}
            onChangeText = {newValue => setName(newValue) }
          
          /> 
          <Text> My name is {name}</Text>
          {
              name.length < 5 ? (<Text>Password is less than 5 characters</Text>) : (<Text></Text>)
          }
      </View>
    )
}
const styles = StyleSheet.create({
    input : {
        margin : 15,
        borderColor : "black",
        borderWidth : 1,
        height: 45
    }
})