// PACKAGES
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// COMPONENTS
import DashboardHome from '../Components/Dashboard/Components/DashboardHome/DashboardHome';
import FBOAdmin from '../Components/Dashboard/Components/FBOAdmin/FBOAdmin';
import CSRLST from '../Components/Dashboard/Components/CSRLST/CSRLST';
import Passenger from '../Components/Dashboard/Components/Passenger/Passenger';

// ROUTER
export default (
    <Switch>
        <Route exact path='/dashboard' component={DashboardHome} />
        <Route path='/dashboard/fboadmin' component={FBOAdmin} />
        <Route path='/dashboard/csrlst' component={CSRLST} />
        <Route path='/dashboard/passenger' component={Passenger} />
    </Switch>
)