import React, { useState } from "react"

const ProfilePage = ({goals_completed, steps_completed}) => {
    let [goal_count, setGoalCount] = useState(5)

    function incrementGoalCount() {
        setGoalCount(++goal_count)
    }

    function decrementGoalCount() {
        setGoalCount(--goal_count)
    }

    if(goal_count < 0) {
        goal_count=0;
    }
    return(
        <div>
           <p>zay@gmail.com / @soniclinkerman</p>

           <div>
               <p>Goals completed: {goals_completed}</p>
               <p>Max goals: 
                   <button onClick={decrementGoalCount}>-</button>
                   {goal_count}
                   <button onClick={incrementGoalCount}>+</button></p>
            </div>

            <div>
               <p>Steps completed: {steps_completed}</p>
            </div>
        </div>
    )
}

export default ProfilePage
