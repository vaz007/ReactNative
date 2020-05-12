import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    // sign up and signin reducer are same
    case "SIGN_IN":
      return { errorMessage: "", token: action.payload };
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    default:
      state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "CLEAR_ERROR_MESSAGE",
  });
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: "SIGN_IN",
      payload: token,
    });
    navigate("TrackList");
  } else {
    navigate("SignUp");
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      dispatch({
        type: "SIGN_IN",
        payload: response.data.token,
      });
      // after signup navigate to mainflow
      // the code is bit complex
      // look at navigationRef.js file

      navigate("TrackList");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      dispatch({
        type: "SIGN_IN",
        payload: response.data.token,
      });
      // after signup navigate to mainflow
      // the code is bit complex
      // look at navigationRef.js file

      navigate("TrackList");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signout = (dispatch) => async () => {
  const token = await AsyncStorage.removeItem("token");
  if (token) {
    dispatch({
      type: "SIGN_OUT",
    });
    navigate("SignUp");
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
