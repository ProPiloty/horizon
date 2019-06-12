import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './LSTStyles';

class LST extends Component {
    render(){
        const componentProps = {
            page: ''
        };
        return (
            <div>
                <DashboardTitle randomProps={componentProps} />
                <ScheduledFlights />
            </div>
        )
    }
}

export default LST;