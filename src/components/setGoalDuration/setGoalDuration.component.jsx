import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function SetGoalDuration({ min = 1, max, ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
    currentGoalState: [currentGoal, setCurrentGoal],
  } = useContext(StoreContext);

  const handleChange = event => {
    const durationProp = { duration: { days: parseInt(event.target.value) } };

    setCurrentGoal({ ...currentGoal, ...durationProp });
    setGoals(
      goals.map(goal =>
        goal.id === currentGoal.id ? { ...goal, ...durationProp } : goal
      )
    );
  };

  return (
    <div {...otherProps}>
      <input
        onChange={e => handleChange(e)}
        placeholder={1}
        type='number'
        min={min}
        max={max}
        name='duration'
      />
    </div>
  );
}

export default SetGoalDuration;
