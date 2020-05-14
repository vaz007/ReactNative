import React, {useContext} from 'react'
import {SafeAreaView} from 'react-navigation'
import { View, StyleSheet, Text} from 'react-native'
import { Button} from "react-native-elements";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContex";

export default function AccountScreen() {
   const { signout } = useContext(AuthContext);
  
    return (
        <SafeAreaView forceInset = {{top : 'always'}}>
            <Text>Account Screen</Text>
            <Spacer />
            <Button 
                title = "Sign Out"
                onPress = {signout}
            />
        </SafeAreaView>
    )
}
