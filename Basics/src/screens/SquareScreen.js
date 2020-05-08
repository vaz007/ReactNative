import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state = Object {red : Num, green : Num, blue : Num}
  //action will have a property  of type {red || green || blue , payload +15 || -15}
  switch (action.type) {
    case "CHANGE_RED":
      // never change state directly such as state.red =+ 15
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "CHANGE_GREEN":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "CHANGE_BLUE":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

export default function SquareScreen() {
  // const [colorRedValue, setRedColour] = useState(0)
  // const [colorGreenValue, setGreenColour] = useState(0)
  // const [colorBlueValue, setBlueColour] = useState(0)

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        textColor="Red"
        // onIncrease = {() => setRedColour(colorRedValue + 15) }
        // onDecrease  = {() => setRedColour(colorRedValue - 15) }

        onIncrease={() =>
          dispatch({ type: "CHANGE_RED", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_RED", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        textColor="Blue"
        // onIncrease = {() => setBlueColour(colorBlueValue + 15) }
        // onDecrease = {() => setBlueColour(colorBlueValue - 15) }
        onIncrease={() =>
          dispatch({ type: "CHANGE_BLUE", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_BLUE", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        textColor="Green"
        //   onIncrease = {() => setGreenColour(colorGreenValue + 15) }
        //   onDecrease = {() => setGreenColour(colorGreenValue - 15) }
        onIncrease={() =>
          dispatch({ type: "CHANGE_GREEN", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_GREEN", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          marginBottom: 15,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
}
