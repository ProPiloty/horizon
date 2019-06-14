import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './InstructorStyles';

class Instructor extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='instructor' />
                <Flights role='instructor' />
            </div>
        )
    }
}

export default Instructor;