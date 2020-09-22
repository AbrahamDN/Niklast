import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation/navigation.component';

import MainPage from './pages/MainPage/mainPage.page';
import TasksOverview from './pages/TasksOverviewPage/tasksOverview.page';
import TaskPage from './pages/TasksPage/task.page';
import TodaysSteps from './pages/TodaysSteps/todaysSteps.page';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Switch>
        <Route path='/task' component={TaskPage} exact />
        <Route path='/tasks' component={TasksOverview} exact />
        <Route path='/tasks-today' component={TodaysSteps} exact />
        <Route path='/' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
