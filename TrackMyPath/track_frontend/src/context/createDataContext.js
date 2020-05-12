import React, { useReducer } from "react";

export default function createDataContext(reducer, actions, defaultValue) {
  const context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <context.Provider value={{ state, ...boundActions }}>
        {children}
      </context.Provider>
    );
  };

  return { Context: context, Provider: Provider };
}
