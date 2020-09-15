import React, { useState, createContext, useEffect } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [goals, setGoals] = useLocalStorage('goalsData', []);

  const store = {
    goalsState: [goals, setGoals],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
