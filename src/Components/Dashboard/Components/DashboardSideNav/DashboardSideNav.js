import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// STYLED COMPONENTS
import {
    NavBar,
    NavButton
} from './DashboardSideNavStyles';

class UserDashNav extends Component {

    render(){
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
            </NavBar>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps)(UserDashNav);