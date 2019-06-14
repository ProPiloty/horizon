import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './PassengerStyles';

class Passenger extends Component {
    render(){
        return (
            <div>
                <h1>Passenger Dashboard</h1>
                <Flights role='passenger' />
            </div>
        )
    }
}

export default Passenger;