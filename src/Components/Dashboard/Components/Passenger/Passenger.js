import React, {Component} from 'react';

// SIBLING COMPONENTS
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './PassengerStyles';

class Passenger extends Component {
    render(){
        return (
            <div>
                <Flights />
            </div>
        )
    }
}

export default Passenger;