import React, { useState } from "react"

const ProfilePage = () => {
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
               <p>Goals completed: 2</p>
               <p>Max goals: 
                   <button onClick={decrementGoalCount}>-</button>
                   {goal_count}
                   <button onClick={incrementGoalCount}>+</button></p>
            </div>

            <div>
               <p>Steps completed: 3</p>
            </div>
        </div>
    )
}

export default ProfilePage
