import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import InsertGoalStep from '../../components/InsertGoalStep/insertGoalStep.component';
import SequenceNextBtn from '../../components/Sequence/sequenceNextBtn.component';
import SequencePreviousBtn from '../../components/Sequence/sequencePreviousBtn.component';

function InsertGoalStepsPage() {
  const {
    currentGoalState: [currentGoal],
  } = useContext(StoreContext);

  return (
    <div>
      <p>What steps will you take to achieve this goal?</p>
      <b>{currentGoal.goal}</b>
      <InsertGoalStep />

      <SequencePreviousBtn />
      <SequenceNextBtn />
    </div>
  );
}

export default InsertGoalStepsPage;
