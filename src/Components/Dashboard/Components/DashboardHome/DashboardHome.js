import React, {Component} from 'react';

// SIBLING COMPONENTS
import FlightForm from '../UniversalComponents/FlightForm/FlightForm';
import Flights from '../UniversalComponents/Flights/Flights';
import Message from '../UniversalComponents/Message/Message';

// STYLED COMPONENTS
import {
    DashColumn
} from './DashboardHomeStyles';

class DashboardHome extends Component {
    render(){
        return (
            <>
                <DashColumn>
                    <Flights />
                </DashColumn>
                <DashColumn>
                    <FlightForm />
                    <Message />
                </DashColumn>
            </>
        )
    }
}

export default DashboardHome;