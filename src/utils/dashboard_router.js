// PACKAGES
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// COMPONENTS
import DashboardHome from '../Components/Dashboard/Components/DashboardHome/DashboardHome';
import CSR from '../Components/Dashboard/Components/CSR/CSR';
import FBOAdmin from '../Components/Dashboard/Components/FBOAdmin/FBOAdmin';
import FlightCrew from '../Components/Dashboard/Components/FlightCrew/FlightCrew';
import FLMAdmin from '../Components/Dashboard/Components/FLMAdmin/FLMAdmin';
import Instructor from '../Components/Dashboard/Components/Instructor/Instructor';
import LST from '../Components/Dashboard/Components/LST/LST';
import Passenger from '../Components/Dashboard/Components/Passenger/Passenger';
import Student from '../Components/Dashboard/Components/Student/Student';

// ROUTER
export default (
    <Switch>
        <Route exact path='/dashboard' component={DashboardHome} />
        <Route path='/dashboard/fboadmin' component={FBOAdmin} />
        <Route path='/dashboard/csr' component={CSR} />
        <Route path='/dashboard/lst' component={LST} />
        <Route path='/dashboard/flmadmin' component={FLMAdmin} />
        <Route path='/dashboard/flightcrew' component={FlightCrew} />
        <Route path='/dashboard/instructor' component={Instructor} />
        <Route path='/dashboard/student' component={Student} />
        <Route path='/dashboard/passenger' component={Passenger} />
    </Switch>
)