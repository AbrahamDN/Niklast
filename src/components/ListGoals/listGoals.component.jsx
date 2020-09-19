import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function ListGoals({ onClickSetSelectedGoal, ...otherProps }) {
  const {
    goalsState: [goals],
    selectedGoalState,
  } = useContext(StoreContext);
  const setSelectedGoal = selectedGoalState[1];

  return (
    <div {...otherProps}>
      <div>
        <ul>
          {goals
            ? goals.map((goal, key) => (
                <li
                  onClick={() =>
                    onClickSetSelectedGoal ? setSelectedGoal(goal) : null
                  }
                  key={goal.id || key}>
                  {goal.goal}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default ListGoals;
