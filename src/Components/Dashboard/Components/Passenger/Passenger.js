import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './PassengerStyles';

class Passenger extends Component {
    render(){
        return (
            <div>
                <h1>Passenger Dashboard</h1>
                <ScheduledFlights role='passenger' />
            </div>
        )
    }
}

export default Passenger;