import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

function ListGoals({ selectGoal, children, ...otherProps }) {
  const history = useHistory();
  const {
    goalsState: [goals],
    selectedGoalState,
  } = useContext(StoreContext);
  const setSelectedGoal = selectedGoalState[1];
  const handleOnClick = goal => {
    setSelectedGoal(goal);
    history.push('/task');
  };

  return (
    <div {...otherProps}>
      <ul>
        {goals
          ? goals.map((goal, key) => (
              <li
                key={goal.id || key}
                onClick={() => (selectGoal ? handleOnClick(goal) : null)}
                style={{ cursor: 'pointer' }}>
                {goal.goal}
              </li>
            ))
          : null}
      </ul>
      {children}
    </div>
  );
}

export default ListGoals;
