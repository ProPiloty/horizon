import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

// STYLED COMPONENTS
import {} from './StudentStyles';

class Student extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='2' />
                <h1>Student Sub-Dashboard</h1>
            </div>
        )
    }
}

export default Student;