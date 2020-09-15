import React, { useContext, useState } from 'react';
import { StoreContext } from './context/storeContext';

import InsertGoal from './components/InsertGoal/insertGoal.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <InsertGoal />
    </div>
  );
}

export default App;
