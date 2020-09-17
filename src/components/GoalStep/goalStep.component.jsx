import React from 'react';
import { StoreContext } from '../../context/storeContext';

// import ListSteps from '../ListSteps/listSteps.component';

function GoalStep({ step, goal, valueOnly, ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
  } = React.useContext(StoreContext);

  const isComplete = event => {
    const complete = event.target.checked;
    return setGoals(
      goals.map(obj =>
        obj.id === goal.id
          ? {
              ...obj,
              steps: obj.steps.map(mapStep =>
                mapStep === step ? { ...mapStep, complete: complete } : mapStep
              ),
            }
          : obj
      )
    );
  };

  if (valueOnly) {
    return <span {...otherProps}>{step}</span>;
  }

  return (
    <div {...otherProps}>
      {goal ? (
        <cite>
          goal: <b>{goal.goal}</b>
        </cite>
      ) : null}
      <div>{step.value}</div>
      <input
        type='checkbox'
        defaultChecked={step.complete || false}
        onChange={e => isComplete(e)}
      />
    </div>
  );
}

export default GoalStep;
