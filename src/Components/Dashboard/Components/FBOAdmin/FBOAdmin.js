import React, {Component} from 'react';

// SIBLING COMPONENTS
import FlightForm from '../UniversalComponents/FlightForm/FlightForm';
import Flights from '../UniversalComponents/Flights/Flights';
import Message from '../UniversalComponents/Message/Message';

// STYLED COMPONENTS
import {
    DashColumn
} from './FBOAdminStyles';

class FBOAdmin extends Component {
    render(){
        const props = {
            page: 'FBO Admin',
        }
        return (
            <>
                <DashColumn>
                    <h1>FBO ADMIN</h1>
                    <Flights myProps={props} />
                </DashColumn>
                <DashColumn>
                    <FlightForm />
                    <Message />
                </DashColumn>
            </>
        )
    }
}

export default FBOAdmin;