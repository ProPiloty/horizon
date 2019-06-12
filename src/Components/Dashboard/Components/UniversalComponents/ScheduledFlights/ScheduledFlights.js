import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// REDUCER FUNCTIONS
import {updateScheduledFlights} from '../../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {} from './ScheduledFlightsStyles';

class ScheduledFlights extends Component {
    
    componentDidMount(){
        axios
            .get(`/api/flights`)
            .then((res) => {
                this.props.updateScheduledFlights(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render(){
        const {scheduledFlights} = this.props.flightReducer;
        const flightList = scheduledFlights.map((flight, ind) => {
            const {
                aircraft_type,
                // arr_date,
                arr_time,
                arr_airport,
                // dep_date,
                dep_time,
                dep_airport,
                tail_number
            } = flight;
            return (
                <div key={ind}>
                    <h2>{tail_number} - {aircraft_type}</h2>
                    <h2>DEP: {dep_airport} @ {dep_time}, ARR: {arr_airport} @ {arr_time}</h2>
                    {/* <h2>Departure Date: {dep_date}, Arrival Date: {arr_date}</h2> */}
                </div>
            )
        })
        return(
            <div>
                <h1>Scheduled Flights</h1>
                <div>
                    {flightList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {updateScheduledFlights})(ScheduledFlights);