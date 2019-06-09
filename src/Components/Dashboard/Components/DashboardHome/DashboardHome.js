import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

class DashboardHome extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='0' />
                <h1>Dashboard Home</h1>
            </div>
        )
    }
}

export default DashboardHome;