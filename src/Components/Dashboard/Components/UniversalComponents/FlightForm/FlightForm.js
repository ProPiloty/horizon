import React, {Component} from 'react';
import {connect} from 'react-redux';

// FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTint,
    faToilet,
    faGasPump,
    faUtensils,
    faHotel,
    faCar
} from '@fortawesome/free-solid-svg-icons';

// REDUCER FUNCTIONS
import {
    updateScheduledFlights,
    updateViewView,
    updateViewAdd,
    updateViewEdit
} from '../../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {
    Container,
    TopBar,
    Title,
    BoxContainer,
    Box,
    BoxTitle,
    BoxRow,
    BoxColumn,
    DetailType,
    FlightDetails,
    FlightInfo,
    ServiceDetails,
    BoldSpan
} from './FlightFormStyles';

class FlightForm extends Component {

    handleViewView = (flight) => {
        this.props.updateViewView(flight);
    }

    handleViewAdd = () => {
        this.props.updateViewAdd();
    }

    handleAddFlight = () => {

    }

    handleViewEdit = (flight) => {
        this.props.updateViewEdit(flight);
    }

    formatDate = (date) => {
        let dateStr = date.toString();
        dateStr = new Date(dateStr).toUTCString();
        return dateStr.split(' ').slice(0, 4).join(' ');
    }

    render(){
        const {add, view, edit} = this.props.flightReducer.views;
        const {flightDetails} = this.props.flightReducer;
        const {
            aircraft_type,
            arr_date,
            arr_time,
            arr_airport,
            dep_date,
            dep_time,
            dep_airport,
            tail_number
        } = flightDetails;

        return(
            <Container>
                <TopBar>
                    <Title>Flight Form</Title>
                    {
                        (view || edit) ?
                        <button onClick={(e) => {this.handleViewAdd()}}>New Flight</button>
                        :
                        null
                    }
                </TopBar>
                <BoxContainer>
                    {
                        add ?
                        <Box>
                            <BoxTitle>New Flight</BoxTitle>
                            <input type='date' />
                            <input type='time' />
                            <input type='date' />
                            <input type='time' />
                            <input />
                            <input />
                        </Box>
                        :
                        null
                    }
                    {
                        view ?
                        <Box>
                            <BoxRow>
                                <BoxTitle>Tail: {tail_number}</BoxTitle>
                                <BoxTitle>Type: {aircraft_type}</BoxTitle>
                            </BoxRow>
                            <BoxRow>
                                <BoxColumn>
                                    <DetailType>Departure:</DetailType>
                                    <FlightDetails>Airport: <BoldSpan>{dep_airport}</BoldSpan></FlightDetails>
                                    <FlightDetails>Date: <BoldSpan>{this.formatDate(dep_date)}</BoldSpan></FlightDetails>
                                    <FlightDetails>Time: <BoldSpan>{dep_time}</BoldSpan></FlightDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <DetailType>Arrival:</DetailType>
                                    <FlightDetails>Airport: <BoldSpan>{arr_airport}</BoldSpan></FlightDetails>
                                    <FlightDetails>Date: <BoldSpan>{this.formatDate(arr_date)}</BoldSpan></FlightDetails>
                                    <FlightDetails>Time: <BoldSpan>{arr_time}</BoldSpan></FlightDetails>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Services:</DetailType>
                            </BoxRow>
                            <BoxRow>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faGasPump}/> Fuel</FlightInfo>
                                    <ServiceDetails>Status: Requested</ServiceDetails>
                                    <ServiceDetails>Gallons: 500</ServiceDetails>
                                    <ServiceDetails>Type: JET-A</ServiceDetails>
                                    <ServiceDetails>Prist: No</ServiceDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faToilet}/> Lavatory Dump/Fill</FlightInfo>
                                    <ServiceDetails>Dump Status: Requested</ServiceDetails>
                                    <ServiceDetails>Fill Gallons: Requested</ServiceDetails>
                                    <ServiceDetails>Amount: 4 gal</ServiceDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faTint}/> Potable Water</FlightInfo>
                                    <ServiceDetails>Status: Requested</ServiceDetails>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <BoxColumn>
                                    <DetailType>Flight Crew:</DetailType>
                                    <FlightInfo><FontAwesomeIcon icon={faUtensils}/> Catering</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faHotel}/> Hotel</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faCar}/> Rental Car</FlightInfo>
                                </BoxColumn>
                                <BoxColumn>
                                    <DetailType>Passengers:</DetailType>
                                    <FlightInfo><FontAwesomeIcon icon={faUtensils}/> Catering</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faHotel}/> Hotel</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faCar}/> Rental Car</FlightInfo>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Comments and Notes:</DetailType>
                                <BoxRow>
                                    
                                </BoxRow>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <button onClick={() => {this.handleViewEdit(flightDetails)}}>Edit Flight</button>
                            </BoxRow>
                        </Box>
                        :
                        null
                    }
                    {
                        edit ?
                        <Box>
                            <BoxRow>
                                <BoxTitle>Tail: <input /></BoxTitle>
                                <BoxTitle>Type: <input /></BoxTitle>
                            </BoxRow>
                            <BoxRow>
                                <BoxColumn>
                                    <DetailType>Departure:</DetailType>
                                    <FlightDetails>Airport: <input /></FlightDetails>
                                    <FlightDetails>Date: <input /></FlightDetails>
                                    <FlightDetails>Time: <input /></FlightDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <DetailType>Arrival:</DetailType>
                                    <FlightDetails>Airport: <input /></FlightDetails>
                                    <FlightDetails>Date: <input /></FlightDetails>
                                    <FlightDetails>Time: <input /></FlightDetails>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Services:</DetailType>
                            </BoxRow>
                            <BoxRow>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faGasPump}/> Fuel</FlightInfo>
                                    <ServiceDetails>Status: <input /></ServiceDetails>
                                    <ServiceDetails>Gallons: <input /></ServiceDetails>
                                    <ServiceDetails>Type: <input /></ServiceDetails>
                                    <ServiceDetails>Prist: <input /></ServiceDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faToilet}/> Lavatory Dump/Fill</FlightInfo>
                                    <ServiceDetails>Dump Status: <input /></ServiceDetails>
                                    <ServiceDetails>Fill Gallons: <input /></ServiceDetails>
                                    <ServiceDetails>Amount: <input /></ServiceDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faTint}/> Potable Water</FlightInfo>
                                    <ServiceDetails>Status: <input /></ServiceDetails>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <BoxColumn>
                                    <DetailType>Flight Crew:</DetailType>
                                    <FlightInfo><FontAwesomeIcon icon={faUtensils}/> Catering</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faHotel}/> Hotel</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faCar}/> Rental Car</FlightInfo>
                                </BoxColumn>
                                <BoxColumn>
                                    <DetailType>Passengers:</DetailType>
                                    <FlightInfo><FontAwesomeIcon icon={faUtensils}/> Catering</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faHotel}/> Hotel</FlightInfo>
                                    <FlightInfo><FontAwesomeIcon icon={faCar}/> Rental Car</FlightInfo>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Comments and Notes:</DetailType>
                                <BoxColumn>
                                    <h2>Category</h2>
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <textarea />
                                    <button>Submit</button>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <button onClick={() => {}}>Submit Changes</button>
                                <button onClick={() => {this.handleViewView(flightDetails)}}>Cancel</button>
                            </BoxRow>
                        </Box>
                        :
                        null
                    }
                </BoxContainer>
            </Container>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {
    updateScheduledFlights,
    updateViewView,
    updateViewAdd,
    updateViewEdit
})(FlightForm);