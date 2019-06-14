import React, {Component} from 'react';
import {connect} from 'react-redux';

// REDUCER FUNCTIONS
import {
    updateScheduledFlights,
    updateViewAdd
} from '../../../../../redux/reducers/flightReducer';

// STYLED COMPONENTS
import {
    Container,
    TopBar,
    Title,
    BoxContainer,
    Box,
    FlightHeader
} from './FlightFormStyles';

class FlightForm extends Component {
    constructor(){
        super();
        this.state = {
            view: 2,
        }
    }

    handleViewAdd = () => {
        this.props.updateViewAdd();
    }

    formatDate = (date) => {
        let dateStr = date.toString();
        dateStr = new Date(dateStr).toUTCString();
        return dateStr.split(' ').slice(0, 4).join(' ');
    }

    render(){
        const {add, view, edit} = this.props.flightReducer.views;
        const {
            aircraft_type,
            arr_date,
            arr_time,
            arr_airport,
            dep_date,
            dep_time,
            dep_airport,
            tail_number
        } = this.props.flightReducer.flightDetails;

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
                            <h1>New Flight</h1>
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
                            <h1>Flight Details</h1>
                            <table>
                                <tr>
                                    <th>Flight</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                                <tr>
                                    <td>Departure:</td>
                                    <td>{this.formatDate(dep_date)}</td>
                                    <td>{dep_time}</td>
                                </tr>
                                <tr>
                                    <td>Arrival:</td>
                                    <td>{this.formatDate(arr_date)}</td>
                                    <td>{arr_time}</td>
                                </tr>
                            </table>
                            <h2>detail</h2>
                            <h2>detail</h2>
                            <h2>detail</h2>
                            <h2>detail</h2>
                        </Box>
                        :
                        null
                    }
                    {
                        edit ?
                        <Box>
                            <h1>Modify Flight</h1>
                            <input />
                            <input />
                            <input />
                            <input />
                            <input />
                            <input />
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
    updateViewAdd
})(FlightForm);