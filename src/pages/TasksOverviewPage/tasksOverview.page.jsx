import React from 'react';
import { useHistory } from 'react-router-dom';
import ListGoals from '../../components/ListGoals/listGoals.component';

function TasksOverview() {
  const history = useHistory();

  return (
    <div>
      <h1>Tasks Overview</h1>
      <ListGoals steps selectGoal />
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
