import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

// STYLED COMPONENTS
import {} from './FlightCrewStyles';

class FlightCrew extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='2' />
                <h1>Flight Crew Sub-Dashboard</h1>
            </div>
        )
    }
}

export default FlightCrew;