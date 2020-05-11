import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up Component</Text>
      </Spacer>

      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Spacer />
      <Button
        //  onPress={() => navigation.navigate("SignIn")}
        title="Sign Up"
      />
      <Spacer />
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="Go to Sign In Demo"
      />
      <Spacer />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
    marginHorizontal: 20,
  },
});

export default SignupScreen;
