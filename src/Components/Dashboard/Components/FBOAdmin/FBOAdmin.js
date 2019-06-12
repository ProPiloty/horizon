import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';
import PastFlights from '../UniversalComponents/PastFlights/PastFlights';

// STYLED COMPONENTS
import {} from './FBOAdminStyles';

class FBOAdmin extends Component {
    render(){
        const props = {
            page: 'FBO Admin',
        }
        return (
            <div>
                <DashboardTitle />
                <ScheduledFlights myProps={props} />
                <PastFlights />
            </div>
        )
    }
}

export default FBOAdmin;