import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTint,
    faToilet,
    faGasPump,
    // faUtensils,
    // faHotel,
    // faCar
} from '@fortawesome/free-solid-svg-icons';

// REDUCER FUNCTIONS
import {
    updateScheduledFlights,
    updatePastFlights,
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
    BoldSpan,
    InputWrap,
    InputName,
    InputField,
    DropInput
} from './FlightFormStyles';

// FLIGHT FORM COMPONENT
class FlightForm extends Component {
    constructor(){
        super();
        this.state = {
            flightDetails: {
                aircraft_id: null,
                aircraft_type: "",
                arr_airport: "",
                arr_date: "",
                arr_location: null,
                arr_time: "",
                base_location: null,
                based_aircraft: null,
                company: null,
                complete: false,
                contact_name: "",
                contact_number: "",
                dep_airport: "",
                dep_date: "",
                dep_location: null,
                dep_time: "",
                flight_id: null,
                fuel_gal: 0,
                fuel_prist: "WITHOUT PRIST",
                fuel_status: "N/A",
                fuel_type: "JET-A",
                id: null,
                lav_dump_status: "N/A",
                lav_fill_gal: "0",
                lav_fill_status: "N/A",
                location_id: null,
                potable_status: "N/A",
                rental_fleet: false,
                tail_number: "",
            }
        }
    }

    componentDidUpdate(previous){
        if (previous.flightReducer.flightDetails.id !== this.props.flightReducer.flightDetails.id) {
            const {flightDetails} = this.props.flightReducer;
            this.setState({flightDetails});
            console.log('Hitting', this.state);
        }
    }

    handleViewView = (flight) => {
        this.props.updateViewView(flight);
        // this.setState({flight})
    }

    handleViewAdd = () => {
        this.setState({ flightDetails: {
            aircraft_type: "",
            arr_airport: "",
            arr_date: "",
            arr_location: null,
            arr_time: "",
            complete: false,
            contact_name: "",
            contact_number: "",
            dep_airport: "",
            dep_date: "",
            dep_location: null,
            dep_time: "",
            fuel_gal: 0,
            fuel_prist: "WITHOUT PRIST",
            fuel_status: "N/A",
            fuel_type: "JET-A",
            id: null,
            lav_dump_status: "N/A",
            lav_fill_gal: "0",
            lav_fill_status: "N/A",
            location_id: null,
            potable_status: "N/A",
            tail_number: "",
        }});
        this.props.updateViewAdd();
    }

    handleViewEdit = (flight) => {
        this.props.updateViewEdit(flight);
        this.setState({flight})
    }

    handleAddFlight = () => {
        const {flightDetails} = this.state;
        axios.post('/api/addflight', {flightDetails})
            .then((res) => {
                
            })
            .catch((err) => {

            });
    }

    handleDeleteFlight = (id) => {
        axios.delete(`/api/deleteflight/${id}`)
            .then((res) => {
                return axios.get('/api/flights');
            })
            .then((res) => {
                this.props.updateScheduledFlights(res.data.scheduledFlights);
                this.props.updatePastFlights(res.data.pastFlights);
                this.handleViewAdd();
            })
            .catch((err) => {

            })
    }

    handleInputChange = (e) => {
        this.setState({
            flightDetails: {
                ...this.state.flightDetails,
                [e.target.name]: e.target.value
            }
        })
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
            aircraft_id,
            aircraft_type,
            arr_airport,
            arr_date,
            arr_location,
            arr_time,
            base_location,
            based_aircraft,
            company,
            complete,
            contact_name,
            contact_number,
            dep_airport,
            dep_date,
            dep_location,
            dep_time,
            flight_id,
            fuel_gal,
            fuel_prist,
            fuel_status,
            fuel_type,
            id,
            lav_dump_status,
            lav_fill_gal,
            lav_fill_status,
            location_id,
            potable_status,
            rental_fleet,
            tail_number,
        } = flightDetails;



        return(
            <Container>
                <TopBar>
                    <Title>{add ? 'New Flight' : view ? 'Flight Details' : 'Edit Flight'}</Title>
                    {
                        (view || edit) ?
                        <button onClick={(e) => {this.handleViewAdd()}}>New Flight</button>
                        :
                        null
                    }
                </TopBar>
                <BoxContainer>
                    {
                        add || edit ?
                        <Box>
                            <BoxRow>
                                <InputWrap>
                                    <InputName>Tail:</InputName>
                                    <InputField name='tail_number' value={this.state.flightDetails.tail_number}onChange={(e) => this.handleInputChange(e)} />
                                </InputWrap>
                                <InputWrap>
                                    <InputName>Type:</InputName>
                                    <InputField name='aircraft_type' value={this.state.flightDetails.aircraft_type} onChange={(e) => this.handleInputChange(e)} />
                                </InputWrap>
                            </BoxRow>   
                            <BoxRow>
                                <BoxColumn>
                                    <DetailType>Departure:</DetailType>
                                    <InputWrap>
                                        <InputName>Airport:</InputName>
                                        <InputField name='dep_airport' value={this.state.flightDetails.dep_airport} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Date:</InputName>
                                        <InputField type='date' name='dep_date' value={this.state.flightDetails.dep_date} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Time:</InputName>
                                        <InputField type='time' name='dep_time' value={this.state.flightDetails.dep_time} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                </BoxColumn>
                                <BoxColumn>
                                    <DetailType>Arrival:</DetailType>
                                    <InputWrap>
                                        <InputName>Airport:</InputName>
                                        <InputField name='arr_airport' value={this.state.flightDetails.arr_airport} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Date:</InputName>
                                        <InputField type='date' name='arr_date' value={this.state.flightDetails.arr_date} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Time:</InputName>
                                        <InputField type='time' name='arr_time' value={this.state.flightDetails.arr_time} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Services:</DetailType>
                            </BoxRow>
                            <BoxRow>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faGasPump}/> Fuel</FlightInfo>
                                    <InputWrap>
                                        <InputName>Status:</InputName>
                                        <DropInput name='fuel_status' value={this.state.flightDetails.fuel_status} onChange={(e) => this.handleInputChange(e)} >
                                            <option value='N/A'>N/A</option>
                                            <option value='Requested'>Requested</option>
                                            <option value='See Notes'>See Notes</option>
                                            <option value='Complete'>Complete</option>
                                        </DropInput>
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Gallons</InputName>
                                        <InputField name='fuel_gal' value={this.state.flightDetails.fuel_gal} onChange={(e) => this.handleInputChange(e)} />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Fuel Type:</InputName>
                                        <DropInput name='fuel_type' value={this.state.flightDetails.fuel_status} onChange={(e) => this.handleInputChange(e)} >
                                            <option value='N/A'>N/A</option>
                                            <option value='JET-A'>JET-A</option>
                                            <option value='AVGAS'>AVGAS</option>
                                        </DropInput>
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Prist:</InputName>
                                        <DropInput name='fuel_prist' value={this.state.flightDetails.fuel_prist} onChange={(e) => this.handleInputChange(e)} >
                                            <option value='N/A'>N/A</option>
                                            <option value='WITHOUT PRIST'>WITHOUT PRIST</option>
                                            <option value='WITH PRIST'>WITH PRIST</option>
                                        </DropInput>
                                    </InputWrap>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faToilet}/> Lavatory Dump/Fill</FlightInfo>
                                    <InputWrap>
                                        <InputName>Dump Status:</InputName>
                                        <DropInput name='lav_dump_status' value={this.state.flightDetails.lav_dump_status} onChange={(e) => this.handleInputChange(e)} >
                                            <option value='N/A'>N/A</option>
                                            <option value='Requested'>Requested</option>
                                            <option value='See Notes'>See Notes</option>
                                            <option value='Complete'>Complete</option>
                                        </DropInput>
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Fill Status:</InputName>
                                        <DropInput name='lav_fill_status' value={this.state.flightDetails.lav_fill_status} onChange={(e) => this.handleInputChange(e)} >
                                            <option value='N/A'>N/A</option>
                                            <option value='Requested'>Requested</option>
                                            <option value='See Notes'>See Notes</option>
                                            <option value='Complete'>Complete</option>
                                        </DropInput>
                                    </InputWrap>
                                    <InputName>Gallons</InputName>
                                        <InputField name='lav_fill_gal' value={this.state.flightDetails.lav_fill_gal} onChange={(e) => this.handleInputChange(e)} />
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faTint}/> Potable Water</FlightInfo>
                                    <InputWrap>
                                        <InputName>Status:</InputName>
                                        <DropInput name='potable_status' value={this.state.flightDetails.potable_status} onChange={(e) => this.handleInputChange(e)} >
                                            <option value='N/A'>N/A</option>
                                            <option value='Requested'>Requested</option>
                                            <option value='See Notes'>See Notes</option>
                                            <option value='Complete'>Complete</option>
                                        </DropInput>
                                    </InputWrap>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            {/* <BoxRow>
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
                            <BoxRow>
                                <BoxColumn>
                                    <DetailType>Entry For:</DetailType>
                                    <InputWrap>
                                        <InputName>Flight Crew</InputName>
                                        <InputField type='checkbox' />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Flight Crew</InputName>
                                        <InputField type='checkbox' />
                                    </InputWrap>
                                    <InputWrap>
                                        <InputName>Category:</InputName>
                                        <DropInput>
                                            <option value="Catering">Catering</option>
                                            <option value="Hotel">Hotel</option>
                                            <option value="Rental">Rental</option>
                                        </DropInput>
                                    </InputWrap>
                                    <h2>Note:</h2>
                                    <textarea />
                                    <button>Submit</button>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Comments and Notes:</DetailType>
                                <BoxColumn>
                                    <h2>Category:</h2>
                                    <select>
                                        <option value="Aircraft">Aircraft</option>
                                        <option value="Hangar">Hangar</option>
                                        <option value="Passenger">Passenger</option>
                                        <option value="Flight Crew">Flight Crew</option>
                                        <option value="Potable">Potable</option>
                                        <option value="Lavatory">Lavatory</option>
                                        <option value="Fuel">Fuel</option>
                                    </select>
                                    <h2>Note:</h2>
                                    <textarea />
                                    <button>Submit</button>
                                </BoxColumn>
                            </BoxRow>
                            <hr/> */}
                            <BoxRow>
                                {add ?
                                    <button onClick={() => {this.handleAddFlight(this.state.flightDetails)}}>Add Flight</button>
                                :
                                    <>
                                    <button onClick={() => {}}>Submit Changes</button>
                                    <button onClick={() => {this.handleDeleteFlight(id)}}>Delete Flight</button>
                                    <button onClick={() => {this.handleViewView(flightDetails)}}>Cancel</button>
                                    </>
                                }
                            </BoxRow>
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
                                    <ServiceDetails>Status: {fuel_status}</ServiceDetails>
                                    <ServiceDetails>Gallons: {fuel_gal}</ServiceDetails>
                                    <ServiceDetails>Type: {fuel_type}</ServiceDetails>
                                    <ServiceDetails>Prist: {fuel_prist}</ServiceDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faToilet}/> Lavatory Dump/Fill</FlightInfo>
                                    <ServiceDetails>Dump Status: {lav_dump_status}</ServiceDetails>
                                    <ServiceDetails>Fill Status: {lav_fill_status}</ServiceDetails>
                                    <ServiceDetails>Fill Gallons: {lav_fill_gal}</ServiceDetails>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo><FontAwesomeIcon icon={faTint}/> Potable Water</FlightInfo>
                                    <ServiceDetails>Status: {potable_status}</ServiceDetails>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            <BoxRow>
                                <DetailType>Contact:</DetailType>
                            </BoxRow>
                            <BoxRow>
                                <BoxColumn>
                                    <FlightInfo>Name: {contact_name}</FlightInfo>
                                </BoxColumn>
                                <BoxColumn>
                                    <FlightInfo>Phone: {contact_number}</FlightInfo>
                                </BoxColumn>
                            </BoxRow>
                            <hr/>
                            {/* <BoxRow>
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
                            <hr/> */}
                            <BoxRow>
                                <button onClick={() => {this.handleViewEdit(flightDetails)}}>Edit Flight</button>
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
    updatePastFlights,
    updateViewView,
    updateViewAdd,
    updateViewEdit
})(FlightForm);