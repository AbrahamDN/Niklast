import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

import ListSteps from '../../components/ListSteps/listSteps.component';

function TodaysSteps() {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);
  const history = useHistory();
  return (
    <div>
      <h1>Steps to take today</h1>
      {goals.map(goal => {
        return (
          <div key={goal.id}>
            <ListSteps steps={goal.steps} goal={goal} cite withDate />
          </div>
        );
      })}

      <button onClick={() => history.push('/tasks')}>Tasks Overview</button>
    </div>
  );
}

export default TodaysSteps;
