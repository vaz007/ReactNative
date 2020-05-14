import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import TrackForm from '../components/TrackForm'
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

// Reusable hook provides error and callback
import useLocation from "../hooks/useLocation";
//Test data for mock location
import "../_mockLocation";

function TrackCreateScreen({ isFocused }) {
  // withNavigationFocus is an HOC which is used
  // while we leave that particular screen

  // console.log("isFocused", isFocused);

  const { state, addLocation } = useContext(LocationContext);
  /*
    The hook has helped us create the location component reusable 
    So now whenever we want to see users location we just pass the 
    following function which will go to hook and create this callback 
    and we will retrive either an error or the location.
  */
  const [error] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording)
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a track</Text>
      <Map />
      {error ? <Text>Location Permission not granted </Text> : null}
        <TrackForm />
    </SafeAreaView>
  );
}

export default withNavigationFocus(TrackCreateScreen);
