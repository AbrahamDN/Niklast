import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import ListSteps from '../../components/ListSteps/listSteps.component';
import ListGoals from '../../components/ListGoals/listGoals.component';

function TasksOverview() {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);
  const history = useHistory();

  return (
    <div>
      <h1>Tasks Overview</h1>
      {goals.length ? (
        goals.map(goal => (
          <ListGoals key={goal.id} selectGoal>
            <ListSteps steps={goal.steps} max={3} valueOnly />
          </ListGoals>
        ))
      ) : (
        <div>
          <h2>You have not set any goals</h2>
          <Link to='/'>Add goals</Link>
        </div>
      )}

      <div>
        <button onClick={() => history.push('/')}>Add a new task</button>
        <button onClick={() => history.push('/tasks-today')}>
          Steps to take today
        </button>
      </div>
    </div>
  );
}

export default TasksOverview;
