import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/MainPage/mainPage.page';
import TasksOverview from './pages/TasksOverviewPage/tasksOverview.page';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/tasks' component={TasksOverview} exact />
        <Route path='/' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
