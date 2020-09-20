import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import InsertGoalStep from '../../components/InsertGoalStep/insertGoalStep.component';
import SequenceNextBtn from '../../components/Sequence/sequenceNextBtn.component';
import SequencePreviousBtn from '../../components/Sequence/sequencePreviousBtn.component';
import ListSteps from '../../components/ListSteps/listSteps.component';

function InsertGoalStepsPage() {
  const {
    currentGoalState: [currentGoal],
  } = useContext(StoreContext);
  const steps = currentGoal.steps;

  return (
    <div>
      <p>What steps will you take to achieve this goal?</p>
      <b>{currentGoal.goal}</b>
      <InsertGoalStep />

      {steps ? <ListSteps steps={steps} valueOnly withDate /> : null}

      <SequencePreviousBtn />
      <SequenceNextBtn />
    </div>
  );
}

export default InsertGoalStepsPage;
