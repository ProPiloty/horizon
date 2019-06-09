import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

// STYLED COMPONENTS
import {} from './FLMAdminStyles';

class FLMAdmin extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='2' />
                <h1>FLM Admin Sub-Dashboard</h1>
            </div>
        )
    }
}

export default FLMAdmin;