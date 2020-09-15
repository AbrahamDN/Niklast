import React, { useState, createContext } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [goals, setGoals] = useState();

  const store = {
    goalsState: [goals, setGoals],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
