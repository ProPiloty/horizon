import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// REDUCER FUNCTIONS
import {updateScheduledFlights} from '../../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {} from './PastFlightsStyles';

class PastFlights extends Component {
    
    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <h1>Past Flights</h1>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {updateScheduledFlights})(PastFlights);