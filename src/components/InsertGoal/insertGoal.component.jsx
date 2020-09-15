import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/storeContext';

function InsertGoal({ ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
  } = useContext(StoreContext);
  const [goal, setGoal] = useState('');

  const handleGoalId = goals ? goals.length - 1 : 0;
  const handleSubmit = event => {
    event.preventDefault();
    setGoals([{ id: handleGoalId, goal }]);
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
