import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext.js';

import SetGoalDuration from '../../components/setGoalDuration/setGoalDuration.component';
import SequenceNextBtn from '../../components/Sequence/sequenceNextBtn.component';

function SetGoalDurationPage() {
  const {
    currentGoalState: [currentGoal],
  } = useContext(StoreContext);

  return (
    <div>
      <p>How many days will this task take to complete?</p>
      <b>{currentGoal.goal}</b>
      <div>
        <SetGoalDuration />
        <span>
          Day
          {currentGoal.duration && currentGoal.duration.days > 1 ? 's' : null}
        </span>
      </div>
      <SequenceNextBtn />
    </div>
  );
}

export default SetGoalDurationPage;
