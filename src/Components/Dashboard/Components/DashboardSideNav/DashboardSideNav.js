import React from 'react';
import {Link} from 'react-router-dom';

// STYLED COMPONENTS
import {
    NavBar,
    NavButton
} from './DashboardSideNavStyles';

const UserDashNav = () => {
    return (
        <NavBar>
            <Link to='/dashboard'><NavButton>Home</NavButton></Link>
            <Link to='/dashboard/fboadmin'><NavButton>FBO Admin</NavButton></Link>
            <Link to='/dashboard/csr'><NavButton>CSR</NavButton></Link>
            <Link to='/dashboard/lst'><NavButton>LST</NavButton></Link>
            <Link to='/dashboard/flmadmin'><NavButton>FLM Admin</NavButton></Link>
            <Link to='/dashboard/flightcrew'><NavButton>Flight Crew</NavButton></Link>
            <Link to='/dashboard/instructor'><NavButton>Instructor</NavButton></Link>
            <Link to='/dashboard/student'><NavButton>Student</NavButton></Link>
            <Link to='/dashboard/passenger'><NavButton>Passenger</NavButton></Link>
        </NavBar>
    )
}

export default UserDashNav;