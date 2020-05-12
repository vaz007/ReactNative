import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContex";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* used to clear the error message once you go to sign in screen */}
        <NavigationEvents 
        onWillFocus = {clearErrorMessage}
      />
    
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        // take email & password from state of authForm and send it to the actions in authContext.js
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <Spacer />

      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign in instead"
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
  link: {
    color: "blue",
  },
});

export default SignupScreen;
