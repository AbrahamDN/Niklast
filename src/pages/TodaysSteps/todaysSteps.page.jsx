import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

import ListSteps from '../../components/ListSteps/listSteps.component';

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

      <Link to='/tasks'>
        <button>Tasks Overview</button>
      </Link>
    </div>
  );
}

export default TodaysSteps;
