import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// STYLED COMPONENTS
import {
    Container,
    TopBar,
    Title,
    BoxContainer,
    Box
} from './MessageStyles';

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: ''
        }
    }

    handleInputUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleMessageSend = () => {
        const {message} = this.state
        const {contact_number} = this.props.flightReducer.flightDetails;
        axios.post('/api/sendmessage', {message, contact_number})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render(){
        const {
            contact_number,
            contact_name
        } = this.props.flightReducer.flightDetails;
        return (
            <Container>
                <TopBar>
                    <Title>Message{contact_name ? ` ${contact_name}` : null}{contact_number ? ` @ ${contact_number}` : null}:</Title>
                </TopBar>
                <BoxContainer>
                    <textarea name='message' value={this.state.message} onChange={(e) => this.handleInputUpdate(e)}></textarea>
                    <button onClick={() => this.handleMessageSend()}>Send Message</button>
                </BoxContainer>
            </Container>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps)(Message);