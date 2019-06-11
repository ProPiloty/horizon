import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';

// STYLED COMPONENTS
import {} from './DashboardHomeStyles';

class DashboardHome extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='home' />
            </div>
        )
    }
}

export default DashboardHome;