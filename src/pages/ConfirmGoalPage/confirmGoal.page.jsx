import React, { useContext } from 'react';
import ListSteps from '../../components/ListSteps/listSteps.component';
import SequenceNextBtn from '../../components/Sequence/sequenceNextBtn.component';
import SequencePreviousBtn from '../../components/Sequence/sequencePreviousBtn.component';
import { StoreContext } from '../../context/storeContext';

function ConfirmGoalPage() {
  const {
    currentGoalState: [currentGoal],
  } = useContext(StoreContext);
  const steps = currentGoal.steps;

  return (
    <div>
      <h1>Here’s your plan to completeing this goal</h1>
      <h2>{currentGoal.goal}</h2>
      {steps ? <ListSteps steps={steps} valueOnly /> : null}

      <p>Looks Good?</p>
      <SequencePreviousBtn value='No' />
      <SequenceNextBtn value='Yes' />
    </div>
  );
}

export default ConfirmGoalPage;
