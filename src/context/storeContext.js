import React, { createContext } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [goals, setGoals] = useLocalStorage('goalsData', []);
  const [currentGoal, setCurrentGoal] = useLocalStorage('currentGoalDate', {});
  const [sequence, setSequence] = React.useState([]);
  const [countSequence, setCountSequence] = React.useState(0);

  const handleSequence = variation => {
    switch (variation) {
      case 'prev':
        return countSequence >= 1 ? setCountSequence(countSequence - 1) : null;
      case 'next':
        return countSequence >= sequence.length
          ? null
          : setCountSequence(countSequence + 1);
      default:
        if (!(countSequence >= sequence.length))
          setCountSequence(countSequence + 1);
    }
  };

  const store = {
    goalsState: [goals, setGoals],
    currentGoalState: [currentGoal, setCurrentGoal],
    sequenceState: [sequence, setSequence],
    countSequenceState: [countSequence, setCountSequence],
    handleSequence,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
