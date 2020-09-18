import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import ListSteps from '../../components/ListSteps/listSteps.component';
import Progress from '../../components/Progess/progress.component';

function TaskPage() {
  const {
    chosenGoalState: [chosenGoal],
  } = useContext(StoreContext);

  return (
    <div>
      <h1>Task</h1>
      <ListSteps steps={chosenGoal.steps} />
      <Progress data={chosenGoal.steps} />
    </div>
  );
}

export default TaskPage;
