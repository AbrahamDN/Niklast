import React, { createContext } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export const StoreContext = createContext();

// ----------------------------------------------------------------------- -//
// ----------------------------------------------------------------------- -//
function StoreContextProvider({ children }) {
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
    shuffle,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
export default StoreContextProvider;
// ----------------------------------------------------------------------- -//
// ----------------------------------------------------------------------- -//

function shuffle(array) {
  if (array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
