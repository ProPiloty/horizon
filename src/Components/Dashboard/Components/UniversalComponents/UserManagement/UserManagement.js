import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// REDUCER FUNCTIONS

// STYLED COMPONENTS
import {} from './UserManagementStyles';

class ScheduledFlights extends Component {
    
    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <h1>User Management</h1>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {updateFlights})(UserManagement);