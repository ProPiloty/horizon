import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTopNav from '../DashboardTopNav/DashboardTopNav';

// STYLED COMPONENTS
import {} from './FBOAdminStyles';

class FBOAdmin extends Component {
    render(){
        return (
            <div>
                <DashboardTopNav page='1' />
                <h1>FBO Admin</h1>
            </div>
        )
    }
}

export default FBOAdmin;