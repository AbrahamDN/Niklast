import React from 'react';
import GoalStep from '../GoalStep/goalStep.component';
// import Progress from '../Progess/progress.component';

function ListSteps({ steps, max, goal, valueOnly, ...otherProps }) {
  if (max && !(typeof max === 'number'))
    console.warn(`ListSteps:`, ` typeof 'max' prop must be a number`);

  if (!steps) {
    return (
      <span>
        {console.warn(
          `ListSteps: 'steps' prop is ${steps}`,
          `Either the prop is missing or the data cannot be maped`
        )}
      </span>
    );
  }

  steps = steps && max && typeof max === 'number' ? steps.slice(0, max) : steps;

  return (
    <div>
      {steps.map((step, key) => (
        <li {...otherProps} key={key}>
          {valueOnly ? (
            <GoalStep step={step} valueOnly />
          ) : (
            <GoalStep step={step} goal={goal ? goal : null} />
          )}
        </li>
      ))}

      {
        //   progress ? (
        //   <Progress
        //     data={steps}
        //     progress={progress.length >= 1 ? progress : false}
        //   />
        // ) : null
      }
    </div>
  );
}

export default ListSteps;
