import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

import ListSteps from '../../components/ListSteps/listSteps.component';

function TodaysSteps() {
  const {
    goalsState: [goals],
    shuffle,
  } = useContext(StoreContext);
  const [shuffled, setShuffled] = useLocalStorage('shuffled', false);
  const [shuffledGoals, setShuffledGoals] = useLocalStorage(
    'shuffledGoals',
    []
  );

  const handleShuffle = array => {
    if (!shuffled) {
      shuffle(array);
      setShuffled(true);
    }
  };

  React.useEffect(() => {
    console.log(shuffled);
    return setShuffledGoals(goals);
  }, []);

  return (
    <div>
      <h1>Steps to take today</h1>
      {shuffled && shuffledGoals.length
        ? shuffledGoals.map(goal => {
            return (
              <div key={goal.id}>
                {handleShuffle(goal.steps)}
                <ListSteps steps={goal.steps} />
              </div>
            );
          })
        : goals.map(goal => {
            return (
              <div key={goal.id}>
                {handleShuffle(goal.steps)}
                <ListSteps steps={goal.steps} />
              </div>
            );
          })}

      <p>1/5</p>

      <Link to=''>
        <button>Check Progression</button>
      </Link>
    </div>
  );
}

export default TodaysSteps;
