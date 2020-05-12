import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContex";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

export default function SigninScreen() {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillFocus = {clearErrorMessage}
      />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        // take email & password from state and send it to the actions in authContext.js
        onSubmit={({ email, password }) => signin({ email, password })}
      />

      <NavLink
        routeName="SignUp"
        text="Don't have an account? Sign Up instead"
      />
    </View>
  );
}
SigninScreen.navigationOptions = () => {
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
  link: {
    color: "blue",
  },
});
