import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import ListSteps from '../ListSteps/listSteps.component';

function ListGoals({ selectGoal, steps, ...otherProps }) {
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
      {goals
        ? goals.map((goal, key) => (
            <div
              key={goal.id || key}
              onClick={() => (selectGoal ? handleOnClick(goal) : null)}
              style={{ cursor: 'pointer' }}>
              <b>{goal.goal}</b>

              {steps ? (
                <div>
                  <ListSteps
                    key={goal.id}
                    steps={goal.steps}
                    max={3}
                    valueOnly
                  />
                </div>
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}

export default ListGoals;
