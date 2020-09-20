import React from 'react';
import { StoreContext } from '../../context/storeContext';
import CustomDatePicker from '../CustomDatePicker/customDatePicker.component';

function GoalStep({ step, goal, cite, valueOnly, withDate, ...otherProps }) {
  const {
    goalsState: [goals, setGoals],
    selectedGoalState: [selectedGoal, setSelectedGoal],
  } = React.useContext(StoreContext);
  const [render, setRender] = React.useState(false);

  const isComplete = ref => {
    const complete = ref.checked;
    const updateSteps = data => {
      return {
        ...data,
        steps: data.steps.map(mapStep =>
          mapStep === step ? { ...mapStep, complete: complete } : mapStep
        ),
      };
    };

    if (selectedGoal.id === goal.id) setSelectedGoal(updateSteps(goal));
    return setGoals(
      goals.map(obj => {
        return obj.id === goal.id ? updateSteps(obj) : obj;
      })
    );
  };

  const handleWithDate = () => {
    if (withDate) {
      return <CustomDatePicker step={step} goal={goal} />;
    }
  };

  React.useEffect(() => {
    // setInterval is there to make the jsx wait for the data before rending
    //This fixed the problem of outdated data  in jsx when switching between ages
    setInterval(() => {
      setRender(true);
    }, 100);
  }, []);

  if (valueOnly) {
    return (
      <span {...otherProps}>
        {step.value} {handleWithDate()}
      </span>
    );
  }

  return render ? (
    <div {...otherProps}>
      {cite && goal ? (
        <cite>
          goal: <b>{goal.goal}</b>
        </cite>
      ) : null}

      <div>{step.value}</div>

      <input
        type='checkbox'
        defaultChecked={step.complete || false}
        onChange={e => isComplete(e.target)}
      />

      {handleWithDate()}
    </div>
  ) : (
    'Loading..'
  );
}

export default GoalStep;
