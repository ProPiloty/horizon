import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Landing from '../Components/Landing/Landing';
import Auth from '../Components/Auth/Auth';
import Dashboard from '../Components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/auth' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>
)