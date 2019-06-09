import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

// STYLED COMPONENTS
import {} from './LSTStyles';

class LST extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='3' />
                <h1>LST Sub-Dashboard</h1>
            </div>
        )
    }
}

export default LST;