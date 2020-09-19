import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import ListSteps from '../../components/ListSteps/listSteps.component';
import Progress from '../../components/Progess/progress.component';

function TaskPage() {
  const {
    goalsState: [goals],
    chosenGoalState: [chosenGoal],
  } = useContext(StoreContext);

  return (
    <div>
      <h1>Task</h1>
      {goals.map(goal =>
        goal.id === chosenGoal.id ? (
          <ListSteps key={goal.id} steps={goal.steps} goal={goal} />
        ) : null
      )}
      <Progress data={chosenGoal.steps} />
    </div>
  );
}

export default TaskPage;
