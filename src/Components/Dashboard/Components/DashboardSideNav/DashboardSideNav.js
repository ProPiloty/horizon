import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

// REDUCER FUNCTIONS
import {
    clearUser
} from '../../../../redux/reducers/userReducer';

import {
    clearFlights,
    updateViewAdd
} from '../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {
    NavBar,
    NavButton
} from './DashboardSideNavStyles';

class UserDashNav extends Component {

    handleLogout = () => {
        axios.post('/auth/logout')
            .then((res) => {
                this.props.clearUser();
                this.props.clearFlights();
                this.props.updateViewAdd();
                this.props.history.push('/auth');
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render(){
        console.log(this.props)
        const {
            fboadmin,
            csr,
            lst,
            passenger
        } = this.props.userReducer.user;
        return (
            <NavBar>
                <Link to='/dashboard'><NavButton>Home</NavButton></Link>
                {fboadmin ? <Link to='/dashboard/fboadmin'><NavButton>FBO Admin</NavButton></Link> : null}
                {csr ? <Link to='/dashboard/csrlst'><NavButton>CSR</NavButton></Link> : null}            
                {lst ? <Link to='/dashboard/csrlst'><NavButton>LST</NavButton></Link> : null}
                {passenger ? <Link to='/dashboard/passenger'><NavButton>Passenger</NavButton></Link> : null}
                <button onClick={() => {this.handleLogout()}}>Log Out</button>
            </NavBar>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default withRouter(connect(mapStateToProps, {
    clearUser,
    clearFlights,
    updateViewAdd
})(UserDashNav));