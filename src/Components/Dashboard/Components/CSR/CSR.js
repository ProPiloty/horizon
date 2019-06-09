import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

// STYLED COMPONENTS
import {} from './CSRStyles';

class CSR extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='2' />
                <h1>CSR Sub-Dashboard</h1>
            </div>
        )
    }
}

export default CSR;