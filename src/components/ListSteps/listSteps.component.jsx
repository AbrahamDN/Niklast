import React from 'react';
import GoalStep from '../GoalStep/goalStep.component';

function ListSteps({ steps, max, goal, valueOnly, ...otherProps }) {
  if (max && !(typeof max === 'number'))
    console.error(`ListSteps:`, ` typeof 'max' prop must be a number`);

  steps = steps && max && typeof max === 'number' ? steps.slice(0, max) : steps;
  return steps ? (
    steps.map((step, key) => (
      <li {...otherProps} key={key}>
        {valueOnly ? (
          <GoalStep step={step} valueOnly />
        ) : (
          <GoalStep step={step} goal={goal ? goal : null} />
        )}
      </li>
    ))
  ) : (
    <div>
      {console.error(
        `ListSteps: 'steps' prop is invalid`,
        `Either the prop is missing or the data cannot be mapped`
      )}
    </div>
  );
}

export default ListSteps;
