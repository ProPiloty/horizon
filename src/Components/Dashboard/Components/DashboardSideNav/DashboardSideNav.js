import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// STYLED COMPONENTS
import {
    NavBar,
    NavButton
} from './DashboardSideNavStyles';

const UserDashNav = (props) => {

    const {
        csr,
        fboadmin,
        flight_crew,
        flight_instructor,
        flmadmin,
        lst,
        passenger,
        student
    } = props.userReducer.user;

    return (
        <NavBar>
            <Link to='/dashboard'><NavButton>Home</NavButton></Link>
            {fboadmin ? <Link to='/dashboard/fboadmin'><NavButton>FBO Admin</NavButton></Link> : null}
            {csr ? <Link to='/dashboard/csr'><NavButton>CSR</NavButton></Link> : null}            
            {lst ? <Link to='/dashboard/lst'><NavButton>LST</NavButton></Link> : null}
            {flmadmin ? <Link to='/dashboard/flmadmin'><NavButton>FLM Admin</NavButton></Link> : null}
            {flight_crew ? <Link to='/dashboard/flightcrew'><NavButton>Flight Crew</NavButton></Link> : null}
            {flight_instructor ? <Link to='/dashboard/instructor'><NavButton>Instructor</NavButton></Link> : null}
            {student ? <Link to='/dashboard/student'><NavButton>Student</NavButton></Link> : null}
            {passenger ? <Link to='/dashboard/passenger'><NavButton>Passenger</NavButton></Link> : null}
        </NavBar>
    )
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps)(UserDashNav);