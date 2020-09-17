import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import ListSteps from '../../components/ListSteps/listSteps.component';

function TasksOverview() {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);
  return (
    <div>
      <h1>Tasks Overview</h1>
      {goals.length ? (
        goals.map(goal => (
          <Link key={goal.id} to=''>
            <div>
              <h3>{goal.goal}</h3>
              <ListSteps steps={goal.steps} max={3} />
            </div>
          </Link>
        ))
      ) : (
        <div>
          <h2>You have not set any goals</h2>
          <Link to='/'>Add goals</Link>
        </div>
      )}

      <div>
        <Link to='/'>
          <button>Add a new task</button>
        </Link>
        <Link to=''>
          <button>Steps to take today</button>
        </Link>
      </div>
    </div>
  );
}

export default TasksOverview;
