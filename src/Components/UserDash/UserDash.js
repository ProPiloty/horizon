import React, {Component} from 'react';

// STYLED COMPONENTS
import {
    UserDashParent,
    LeftMain,
    RightMain,
    RightMainNav
} from './UserDashStyles';

class UserDash extends Component {
    render(){
        return (
            <UserDashParent>
                <LeftMain></LeftMain>
                <RightMain>
                    <RightMainNav></RightMainNav>
                    {/* NESTED ROUTES */}
                </RightMain>
            </UserDashParent>
        )
    }
}

export default UserDash;