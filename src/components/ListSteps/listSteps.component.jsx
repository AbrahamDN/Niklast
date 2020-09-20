import React from 'react';
import GoalStep from '../GoalStep/goalStep.component';
// import Progress from '../Progess/progress.component';

function ListSteps({
  steps,
  max,
  goal,
  cite,
  withDate,
  valueOnly,
  ...otherProps
}) {
  if (max && !(typeof max === 'number'))
    console.warn(`ListSteps:`, ` typeof 'max' prop must be a number`);

  if (!steps) return null;

  steps = steps && max && typeof max === 'number' ? steps.slice(0, max) : steps;

  return (
    <div>
      {steps.map((step, key) => (
        <li {...otherProps} key={key}>
          {valueOnly ? (
            <GoalStep step={step} valueOnly withDate={withDate} />
          ) : (
            <GoalStep
              step={step}
              goal={goal ? goal : null}
              cite={cite}
              withDate={withDate}
            />
          )}
        </li>
      ))}
    </div>
  );
}

export default ListSteps;
