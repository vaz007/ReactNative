import React, { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldLocationTrackBeEnabled, callback) => {
  const [error, setError] = useState(null);

  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();

      // From watchPositionAsync we get a value of subscriber
      // which has the function remove in it
      // Add remove function if you want to
      // stop using location once the user has left focus of the screen
      // subscriber.remove()
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (shouldLocationTrackBeEnabled) {
      startWatching();
    } else {
      // stop watching
      subscriber.remove();
      setSubscriber(null)
    }
  }, [shouldLocationTrackBeEnabled]); // // The value inside the array means it will run once  when component is First rendered
  return [error];
};
