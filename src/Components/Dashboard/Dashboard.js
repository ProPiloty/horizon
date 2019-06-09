import React, {Component} from 'react';

// USERDASH ROUTES
import userdash_router from '../../utils/dashboard_router';

// CHILD COMPONENTS
import DashboardNav from './Components/DashboardSideNav/DashboardSideNav';

// STYLED COMPONENTS
import {
    UserDashParent,
    Main,
} from './DashboardStyles';

class UserDash extends Component {
    render(){
        return (
            <UserDashParent>
                <DashboardNav></DashboardNav>
                <Main>
                    {userdash_router}
                </Main>
            </UserDashParent>
        )
    }
}

export default UserDash;