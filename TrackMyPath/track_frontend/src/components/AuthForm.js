import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

// destructuring props
const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
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

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Button
        onPress={() => onSubmit({ email, password })}
        title={submitButtonText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginBottom: 15,
      },
      
});
export default AuthForm;