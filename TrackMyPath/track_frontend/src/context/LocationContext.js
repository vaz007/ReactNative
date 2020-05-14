import createDataContext from "./createDataContext";

// REDUCER
const locationReducer = (action, state) => {
  switch (action.type) {
    case "ADD_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    case "START_RECORDING":
      return { ...state, recording: true };
    case "STOP_RECORDING":
      return { ...state, recording: false };
    case "ADD_LOCATION":
      return { ...state, locations: [...state.locations, action.payload] };
    case "CHANGE_TRACK_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Action Functions
const startRecording = (dispatch) => () => {
  dispatch({
    type: "START_RECORDING",
  });
};
const stopRecording = (dispatch) => () => {
  dispatch({
    type: "STOP_RECORDING",
  });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({
    type: "ADD_CURRENT_LOCATION",
    payload: location,
  });
  if (recording) {
    dispatch({
      type: "ADD_LOCATION",
      payload: location,
    });
  }
};
const changeTrackName = (dispatch) => (name) => {
  dispatch({
    type: "CHANGE_TRACK_NAME",
    payload: name,
  });
};
export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeTrackName },
  { recording: false, locations: [], currentLocation: null, name : "" }
);
