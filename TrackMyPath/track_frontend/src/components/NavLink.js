import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

import Spacer from "../components/Spacer";

function NavLink({ navigation, text, routeName }) {
  return (
    <>
      <Spacer />
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
      <Spacer />
    </>
  );
}
const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
