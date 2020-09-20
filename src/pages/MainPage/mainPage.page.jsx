import React from 'react';

import Sequence from '../../components/Sequence/sequence.component';
import InsertGoal from '../../components/InsertGoal/insertGoal.component';
import InsertGoalStepsPage from '../InsertGoalStepsPage/insertGoalSteps.page';
import ListGoals from '../../components/ListGoals/listGoals.component';
import SetGoalDurationPage from '../SetGoalDurationPage/setGoalDurationPage.page';
import ConfirmGoalPage from '../ConfirmGoalPage/confirmGoal.page';

function MainPage() {
  return (
    <div>
      <Sequence
        data={[
          <div>
            <InsertGoal />
            <ListGoals selectGoal />
          </div>,
          <SetGoalDurationPage />,
          <InsertGoalStepsPage />,
          <ConfirmGoalPage />,
        ]}
      />
    </div>
  );
}

export default MainPage;
