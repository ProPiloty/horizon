import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './FlightCrewStyles';

class FlightCrew extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='flightcrew' />
                <ScheduledFlights role='flightcrew' />
            </div>
        )
    }
}

export default FlightCrew;