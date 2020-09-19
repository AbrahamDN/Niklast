import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import ListSteps from '../../components/ListSteps/listSteps.component';
import Progress from '../../components/Progess/progress.component';

function TaskPage() {
  const {
    goalsState: [goals],
    selectedGoalState: [selectedGoal],
  } = useContext(StoreContext);

  return selectedGoal ? (
    <div>
      <h1>Task</h1>
      {goals.map(goal =>
        goal.id === selectedGoal.id ? (
          <ListSteps key={goal.id} steps={goal.steps} goal={goal} />
        ) : null
      )}
      <Progress data={selectedGoal.steps} />
    </div>
  ) : (
    <div>'No Goal has been selected'</div>
  );
}

export default TaskPage;
