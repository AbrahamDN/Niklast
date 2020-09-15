import React from 'react';

import InsertGoal from './components/InsertGoal/insertGoal.component';
import ListGoals from './components/ListGoals/listGoals.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <InsertGoal />
        <ListGoals />
      </div>
    </div>
  );
}

export default App;
