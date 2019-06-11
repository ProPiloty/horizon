import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './StudentStyles';

class Student extends Component {
    render(){
        return (
            <div>
                <h1>Student Dashboard</h1>
                <ScheduledFlights role='student' />
            </div>
        )
    }
}

export default Student;