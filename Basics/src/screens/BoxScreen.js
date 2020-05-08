import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function BoxScreen() {
    return (
     <View style = {styles.viewStyle}>
         {/* <Text style = {styles.textOneStyle}>Box Screen</Text>
         <Text style = {styles.textTwoStyle}>Child 2</Text>
         <Text style = {styles.textThreeStyle}>Child 3</Text>
      */}
        <View style = {styles.viewOneStyle}></View>
        <View style = {styles.viewTwoStyle}></View>        
        <View style = {styles.viewThreeStyle}></View>
     </View>
    )
}
const styles = StyleSheet.create({
    viewStyle : {
        borderWidth : 3,
        borderColor : 'black',
        height : 200,
        flexDirection : 'row',
        justifyContent : 'space-between'
    
    },
    viewOneStyle : {
        height : 100,
        width : 100,
        backgroundColor : 'red',
        
    },
    viewTwoStyle : {
        height : 100,
        width : 100,
        backgroundColor : 'blue',
        alignSelf : 'flex-end'
    
    },
    viewThreeStyle : {
        height : 100,
        width : 100,
        backgroundColor : 'green',
       
    },
    textOneStyle : {
        borderWidth : 1,
        borderColor : 'red',
        flex : 1
        
    },
    textTwoStyle : {
        borderWidth : 1,
        borderColor : 'red',
        flex : 1
        
    },
    textThreeStyle : {
        borderWidth : 1,
        borderColor : 'red',
        flex: 1
        
    }

})