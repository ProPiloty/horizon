import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// REDUCER FUNCTIONS
import {updateFlights} from '../../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {} from './ScheduledFlightsStyles';

class ScheduledFlights extends Component {
    
    componentDidMount(){
        console.log(this.props);
        // axios
        //     .get(`/api/fights`)
        //     .then((res) => {
        //         this.props.updateFlights(res.data);
        //         console.log(this.props);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    render(){
        return(
            <h1>Scheduled Flights</h1>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {updateFlights})(ScheduledFlights);