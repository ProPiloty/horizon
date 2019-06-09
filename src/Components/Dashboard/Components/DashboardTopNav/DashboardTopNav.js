import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// STYLED COMPONENTS
import {
    TopNav
} from './DashboardTopNavStyles';

class DashboardTopNav extends Component {

    setTopNavDisplay(){
        switch(this.props.page){
            case '0':
                return (
                    <Link to='/dashboard/fboadmin'><button>FBO ADMIN</button></Link>
                )
            case '1':
                return (
                    <Link to='/dashboard'><button>DASHBOARD</button></Link>
                )
        }
    }

    render(){
        return (
            <div>
                <TopNav>
                    {this.setTopNavDisplay()}
                </TopNav>
            </div>
        )
    }
}

export default DashboardTopNav;