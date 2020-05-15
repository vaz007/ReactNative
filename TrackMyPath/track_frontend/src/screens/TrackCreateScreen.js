import React, { useContext, useCallback } from "react";
import { Text } from "react-native-elements";
import {FontAwesome} from '@expo/vector-icons'
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import TrackForm from "../components/TrackForm";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

// Reusable hook provides error and callback
import useLocation from "../hooks/useLocation";
//Test data for mock location
import "../_mockLocation";


// Complex code 
function TrackCreateScreen({ isFocused }) {
 /* 
  // withNavigationFocus is an HOC which is used
  // while we leave that particular screen
  // isFocused is part of withNavigationFocus function 

  // console.log("isFocused", isFocused);
*/

const { state, addLocation } = useContext(LocationContext);

/*
  // Callback helps us reducing the time when we call 
  // add location So if recording is true we start the callback 
  // then we compare the object we receive when the next time callback is called
  // if there is a difference we render else we keep it the same 
*/

  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  /*
    The hook has helped us create the location component reusable 
    So now whenever we want to see users location we just pass the 
    following function which will go to hook and create this callback 
    and we will retrive either an error or the location.
  */
  const [error] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a track</Text>
      <Map />
      {error ? <Text>Location Permission not granted </Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
}


TrackCreateScreen.navigationOptions = {
  title : "Add Track",
  tabBarIcon : <FontAwesome name = "plus" size = {20} />
}

export default withNavigationFocus(TrackCreateScreen);
