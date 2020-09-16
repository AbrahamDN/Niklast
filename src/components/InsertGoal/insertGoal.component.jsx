import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/storeContext';

function InsertGoal({ ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
    currentGoalState,
    handleSequence,
  } = useContext(StoreContext);
  const setCurrentGoal = currentGoalState[1];
  const [goal, setGoal] = useState('');

  const handleGoalId = goals ? goals.length : 0;
  const handleSubmit = event => {
    event.preventDefault();
    setGoals([...goals, { id: handleGoalId, goal }]);
    setCurrentGoal({ id: handleGoalId, goal });
    handleSequence();
  };
  return (
    <div {...otherProps}>
      <form onSubmit={e => handleSubmit(e)}>
        <input value={goal} onChange={e => setGoal(e.target.value)} />
        <input value='Add' type='submit' />
      </form>
    </div>
  );
}

export default InsertGoal;
