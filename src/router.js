import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Auth from './Components/Auth/Auth';
import UserDash from './Components/UserDash/UserDash';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/auth' component={Auth} />
        <Route path='/dashboard' component={UserDash} />
    </Switch>
)