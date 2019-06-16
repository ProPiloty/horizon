import React, {Component} from 'react';

// SIBLING COMPONENTS
import FlightForm from '../UniversalComponents/FlightForm/FlightForm';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {
    DashColumn
} from './CSRLSTStyles';

class CSRLST extends Component {
    render(){
        const props = {
            page: 'CSR LST',
        }
        return (
            <>
                <DashColumn>
                    <h1>CST LST</h1>
                    <Flights myProps={props} />
                </DashColumn>
                <DashColumn>
                    <FlightForm />
                </DashColumn>
            </>
        )
    }
}

export default CSRLST;