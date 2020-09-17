import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

import ListSteps from '../../components/ListSteps/listSteps.component';

function StepsProgress({ steps, progress }) {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);
  const countSteps = goals.map(goal => (goal.steps ? goal.steps.length : 0));
  const totalSteps =
    countSteps && countSteps.length
      ? countSteps.reduce((acc, curr) => acc + curr)
      : null;
  const getCompletedSteps = steps.map(step => (step.complete ? step : 0));
  const completedSteps = getCompletedSteps.filter(array => array).length;

  if (progress && progress === 'alone') {
    return <progress value={completedSteps} max={totalSteps}></progress>;
  }

  if (progress && progress === 'none') {
    return <p>{`${completedSteps} / ${totalSteps}`}</p>;
  }

  return (
    <div>
      <p>{`${completedSteps} / ${totalSteps}`}</p>
      <progress value={completedSteps} max={totalSteps}></progress>
    </div>
  );
}

function TodaysSteps() {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);

  return (
    <div>
      <h1>Steps to take today</h1>
      {goals.map(goal => {
        return (
          <div key={goal.id}>
            <ListSteps steps={goal.steps} goal={goal} />
          </div>
        );
      })}

      {goals.map(goal =>
        goal.steps ? <StepsProgress key={goal.id} steps={goal.steps} /> : null
      )}

      <Link to=''>
        <button>Check Progression</button>
      </Link>
    </div>
  );
}

export default TodaysSteps;
