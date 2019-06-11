import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';
import PastFlights from '../UniversalComponents/PastFlights/PastFlights';

// STYLED COMPONENTS
import {} from './FBOAdminStyles';

class FBOAdmin extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='fboadmin' />
                <ScheduledFlights />
                <PastFlights />
            </div>
        )
    }
}

export default FBOAdmin;