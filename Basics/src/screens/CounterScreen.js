//import React, { useState } from "react";
//Using Reducer so no use of UseState
import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  //  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.textStyle}>Current Count : {state.counter} </Text>
      <TouchableOpacity
        //onPress={() => setCounter(counter + 1)}
        onPress={() => dispatch({ type: "INCREMENT", payload: 1 })}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Increase Count</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => setCounter(counter - 1)}
        onPress={() => dispatch({ type: "DECREMENT", payload: -1 })}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Decrease Count</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 30,
    fontSize: 30,
  },
  buttonStyle: {
    backgroundColor: "darkorange",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
