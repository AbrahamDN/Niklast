import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/storeContext';

function InsertGoalStep({ ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
    currentGoalState: [currentGoal, setCurrentGoal],
  } = useContext(StoreContext);
  const [step, setStep] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const handleSteps = (goal, step) => {
      return goal.steps
        ? [...goal.steps, { id: goal.steps.length, value: step }]
        : [{ id: 0, value: step, createdAt: new Date() }];
    };

    setGoals(
      goals.map(goal =>
        goal.id === currentGoal.id
          ? { ...goal, steps: handleSteps(goal, step) }
          : goal
      )
    );
    setCurrentGoal({
      ...currentGoal,
      steps: handleSteps(currentGoal, step),
    });
  };

  return (
    <div {...otherProps}>
      <form onSubmit={e => handleSubmit(e)}>
        <input value={step} onChange={e => setStep(e.target.value)} required />
        <input value='Add Step' type='submit' />
      </form>
    </div>
  );
}

export default InsertGoalStep;
