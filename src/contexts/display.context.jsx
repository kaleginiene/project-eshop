import React, { useState, createContext } from "react";

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <DisplayContext.Provider value={{ state, setState }}>
      {children}
    </DisplayContext.Provider>
  );
};
