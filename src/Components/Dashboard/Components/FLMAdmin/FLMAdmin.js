import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './FLMAdminStyles';

class FLMAdmin extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='flmadmin' />
                <ScheduledFlights role='flmadmin' />
            </div>
        )
    }
}

export default FLMAdmin;