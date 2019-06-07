import React from 'react';
import {Link} from 'react-router-dom';

// STYLED COMPONENTS
import {
    LandingNav,
    LandingHero,
    LandingAbout,
    LandingFooter
} from './LandingStyles';

const Landing = () => {
    return (
        <>
            <LandingNav>
                <h1>Horizon Management</h1>
                <Link to='/auth'><button>Login</button></Link>
            </LandingNav>
            <LandingHero></LandingHero>
            <LandingAbout></LandingAbout>
            <LandingFooter>
                <ul>
                    <li>Home</li>
                    <li>Dashboard</li>
                </ul>
                <p>Horizon Management</p>
                <p>Created by: Tyler Ellingford</p>
            </LandingFooter>
        </>
    )
}

export default Landing;