import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

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

    componentDidMount(){
        axios.get('/auth/checklogin')
            .then()
            .catch((err) => {
                alert('Unauthorized access. You must be logged in to have access to your dashboard. You will be redirected to log in.');
                this.props.history.push('/auth');
            })
    }

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

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps)(UserDash);