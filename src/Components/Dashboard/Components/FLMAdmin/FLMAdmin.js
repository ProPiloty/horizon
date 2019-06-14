import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './FLMAdminStyles';

class FLMAdmin extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='flmadmin' />
                <Flights role='flmadmin' />
            </div>
        )
    }
}

export default FLMAdmin;