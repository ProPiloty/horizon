import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import FlightForm from '../UniversalComponents/FlightForm/FlightForm';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {
    DashMain,
    DashColumn
} from './FBOAdminStyles';

class FBOAdmin extends Component {
    render(){
        const props = {
            page: 'FBO Admin',
        }
        return (
            <div>
                <DashboardTitle />
                <DashMain>
                    <DashColumn>
                        <Flights myProps={props} />
                    </DashColumn>
                    <DashColumn>
                        <FlightForm />
                    </DashColumn>
                </DashMain>
            </div>
        )
    }
}

export default FBOAdmin;