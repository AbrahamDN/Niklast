import React from 'react';
// import { Link } from 'react-router-dom';

import Sequence from '../../components/Sequence/sequence.component';
import InsertGoal from '../../components/InsertGoal/insertGoal.component';
import InsertGoalStepsPage from '../InsertGoalStepsPage/insertGoalSteps.page';
import ListGoals from '../../components/ListGoals/listGoals.component';
import SetGoalDurationPage from '../SetGoalDurationPage/setGoalDurationPage.page';

function MainPage() {
  return (
    <div>
      <Sequence
        data={[
          <div>
            <InsertGoal />
            <ListGoals />
          </div>,
          <SetGoalDurationPage />,
          <InsertGoalStepsPage />,
        ]}
      />
    </div>
  );
}

export default MainPage;
