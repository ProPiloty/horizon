import React, {Component} from 'react';
import axios from 'axios';

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
        console.log('Firing')
        const {message} = this.state
        axios.post('/api/sendmessage', {message})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render(){
        return (
            <div>
                <textarea name='message' value={this.state.message} onChange={(e) => this.handleInputUpdate(e)}></textarea>
                <button onClick={() => this.handleMessageSend()}>Send Message</button>
            </div>
        )
    }
}

export default Message;