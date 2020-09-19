import React, { useContext, useState } from 'react';
import SequenceNextBtn from '../../components/Sequence/sequenceNextBtn.component';
import { StoreContext } from '../../context/storeContext';

function ConfirmGoalPage(){
    const {currentGoalState: [currentGoal],} = useContext(StoreContext);
    return(
        <div>
            <h1>Here’s your plan to completeing this goal</h1>
            <h2>{currentGoal.goal}</h2>

            <p>Looks Good?</p>
            <SequenceNextBtn />
        </div>
    )
}


export default ConfirmGoalPage
