import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// REDUCER FUNCTIONS
import {
    updateScheduledFlights,
    updatePastFlights,
    updateViewView,
    updateViewEdit
} from '../../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {
    Container,
    TopBar,
    Title,
    FlightList,
    FlightBox,
    FlightHeader
} from './FlightsStyles';

class ScheduledFlights extends Component {
    constructor(){
        super();
        this.state = {
            scheduledView: true,
        }
    }
    
    componentDidMount(){
        axios
            .get(`/api/flights`)
            .then((res) => {
                this.props.updateScheduledFlights(res.data.scheduledFlights);
                this.props.updatePastFlights(res.data.pastFlights);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    changeDisplay = () => {
        this.setState({
            scheduledView: !this.state.scheduledView,
        })
    }

    formatDate = (date) => {
        let dateStr = date.toString();
        dateStr = new Date(dateStr).toUTCString();
        return dateStr.split(' ').slice(0, 4).join(' ');
    }

    handleViewFlight = (flight) => {
        this.props.updateViewView(flight);
    }

    handleEditFlight = (flight) => {
        this.props.updateViewEdit(flight);
    }

    render(){
        const {scheduledView} = this.state;
        const {scheduledFlights, pastFlights} = this.props.flightReducer;
        const componentTitle = scheduledView ? 'Scheduled' : 'Past';
        const componentButton = scheduledView ? 'Past' : 'Scheduled';
        const flightsUsed = scheduledView ? scheduledFlights : pastFlights;
        const flightList = flightsUsed.map((flight, ind) => {
            const {
                aircraft_type,
                arr_date,
                arr_time,
                arr_airport,
                dep_date,
                dep_time,
                dep_airport,
                tail_number
            } = flight;

            return (
                <FlightBox key={ind}>
                    <FlightHeader>{tail_number} - {aircraft_type}</FlightHeader>
                    <h2>DEP: {dep_airport} @ {dep_time}, ARR: {arr_airport} @ {arr_time}</h2>
                    <h2>Departure Date: {this.formatDate(dep_date)}, Arrival Date: {this.formatDate(arr_date)}</h2>
                    <button onClick={(e) => (this.handleViewFlight(flight))}>View Details</button>
                    <button onClick={(e) => (this.handleEditFlight(flight))}>Edit Flight</button>
                </FlightBox>
            )
        })
        return(
            <Container>
                <TopBar>
                    <Title>{componentTitle} Flights</Title>
                    <button onClick={this.changeDisplay}>View {componentButton} Flights</button>
                </TopBar>
                <FlightList>
                    {
                        flightList[0]
                        ?
                        flightList
                        :
                        (
                            <FlightBox>
                                <FlightHeader>There are no {componentTitle} flights</FlightHeader>
                            </FlightBox>
                        )
                    }
                </FlightList>
            </Container>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {
    updateScheduledFlights,
    updatePastFlights,
    updateViewView,
    updateViewEdit
})(ScheduledFlights);