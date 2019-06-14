import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './StudentStyles';

class Student extends Component {
    render(){
        return (
            <div>
                <h1>Student Dashboard</h1>
                <Flights role='student' />
            </div>
        )
    }
}

export default Student;