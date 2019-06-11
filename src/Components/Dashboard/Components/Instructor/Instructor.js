import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './InstructorStyles';

class Instructor extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='instructor' />
                <ScheduledFlights role='instructor' />
            </div>
        )
    }
}

export default Instructor;