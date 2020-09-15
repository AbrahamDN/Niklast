import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

function ListGoals({ ...otherProps }) {
  const {
    goalsState: [goals],
  } = useContext(StoreContext);
  return (
    <div {...otherProps}>
      <div>
        <ul>
          {goals
            ? goals.map((goal, key) => (
                <li key={goal.id || key}>{goal.goal}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default ListGoals;
