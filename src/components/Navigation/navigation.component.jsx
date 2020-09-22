import React, { useContext, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/MainPage/mainPage.page';

const Navigation = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/tasks">Tasks</Link>
            <br/>
            <Link to="/tasks-today">Today's Tasks</Link>
            <br/>
            <Link to="/profile">Profile</Link>
            <br/>
            <Link to="/sign-out">Sign Out</Link>


        </div>
    )
}

export default Navigation
