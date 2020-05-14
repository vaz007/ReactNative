import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

import { Context as LocationContext } from "../context/LocationContext";

export default function TrackForm() {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeTrackName,
    locations
  } = useContext(LocationContext);

  console.log("LOCTION LENGTH" , locations)
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeTrackName}
          placeholder="Enter name for your track"
        />
      </Spacer>
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
}
