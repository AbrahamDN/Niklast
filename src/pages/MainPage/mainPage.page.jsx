import React from 'react';

import Sequence from '../../components/Sequence/sequence.component';
import InsertGoal from '../../components/InsertGoal/insertGoal.component';
import ListGoals from '../../components/ListGoals/listGoals.component';
import SetGoalDuration from '../../components/setGoalDuration/setGoalDuration.component';

function MainPage() {
  return (
    <Sequence
      data={[
        <div>
          <InsertGoal />
          <ListGoals />
        </div>,
        <SetGoalDuration />,
      ]}
    />
  );
}

export default MainPage;
