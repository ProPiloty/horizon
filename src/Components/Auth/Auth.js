import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// REDUCER FUNCTIONS
import {updateUser} from '../../redux/reducers/userReducer';

// STYLED COMPONENTS
import {
    AuthContainer,
    AuthForm,
    AuthMessage,
    AuthFormInputTitle,
    AuthFormInput,
    AuthFormButton,
} from './AuthStyles';

// AUTH COMPONENT
class Auth extends Component {
    constructor(){
        super();
        this.state = {
            step:3,
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            fboadmin: false,
            flmadmin: false,
            student: false,
            passenger: false
        };
    }

    // FIRES ON SUBMIT AFTER USER ENTERS EMAIL, SETS STEP ON STATE BASED ON RESPONSE
    checkUserEmail = (e) => {
        e.preventDefault();

        // PULLS EMAIL OFF STATE AND STORES IT FOR SENDING
        const {email} = this.state;
        const body = {email};

        // CHECKS EXISTANCE OF USERS ACCOUNT
        axios.post('/auth/checkemail', body)
            .then((res) => {
                this.setState({step: 0}) // STEP 0 ON STATE = PASSWORD INPUT PAGE
            })
            .catch((err) => {
                this.setState({step: 1}) // STEP 1 ON STATE = USER REGISTER PAGE
            });
    }

    // FIRES ON SUBMIT AFTER USER ENTERS PASSWORD, REDIRECTS TO USER DASHBOARD IF AUTHORIZED
    handleLoginSubmit = (e) => {
        e.preventDefault();

        // PULLS EMAIL & PASSWORD OFF STATE AND STORES IT FOR SENDING
        const {email, password} = this.state;
        const body = {email, password};

        // SENDS INFORMATION FOR LOGIN
        axios.post('/auth/login', body)
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log(err);
            })
    }

    // FIRES ON SUBMIT FROM FIRST REGISTER PAGE
    setStepToRegister2 = (e) => {
        e.preventDefault();
        this.setState({step: 2});
    }

    // FIRES ON SUBMIT FROM SECOND REGISTER PAGE
    handleRegisterSubmit = (e) => {
        e.preventDefault();

        const {email, password, firstname, lastname, fboadmin, flmadmin, student, passenger} = this.state;
        const body = {email, password, firstname, lastname, fboadmin, flmadmin, student, passenger};

        axios.post('/auth/register', body)
            .then(res => {
                this.props.updateUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log(err);
            })
    }

    // HANDLES UPDATE FROM TEXT FIELD INPUTS
    handleTextInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // HANDLES UPDATE FROM CHECKBOX FIELD INPUTS
    handleRoleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    // CHECKS STATE AND DISPLAYS VARIOUS FORMS FOR BASIC AUTHORIZATION FUNCTION
    setAuthDisplay(){
        switch(this.state.step){
            case 0:
                return (
                    <AuthForm onSubmit={this.handleLoginSubmit}>
                        <AuthMessage>Welcome back {this.state.email}!</AuthMessage>
                        <AuthFormInputTitle>Please enter your password:</AuthFormInputTitle>
                        <AuthFormInput
                            field='password'
                            fieldType='password'
                            value={this.state.password}
                            onChange={this.handleTextInput} />
                        <AuthFormButton>Log In</AuthFormButton>
                    </AuthForm>
                )
            case 1:
                return (
                    <AuthForm onSubmit={this.setStepToRegister2}>
                        <AuthMessage>Sorry! We couldnt find an account with that email. Let's create one!</AuthMessage>
                        <AuthFormInputTitle>To start, what's your first name?</AuthFormInputTitle>
                        <AuthFormInput
                            field='firstname'
                            fieldType='text'
                            value={this.state.firstname}
                            onChange={this.handleTextInput} />
                        <AuthFormInputTitle>And your last name?</AuthFormInputTitle>
                        <AuthFormInput
                            field='lastname'
                            fieldType='text'
                            value={this.state.lastname}
                            onChange={this.handleTextInput} />
                        <AuthFormInputTitle>If you'd like to use a different email, now's your chance!</AuthFormInputTitle>
                        <AuthFormInput
                            field='email'
                            fieldType='email'
                            value={this.state.email}
                            onChange={this.handleTextInput} />
                        <AuthFormInputTitle>And please create a password.</AuthFormInputTitle>
                        <AuthFormInput
                            field='password'
                            fieldType='password'
                            value={this.state.password}
                            onChange={this.handleTextInput} />
                        <AuthFormButton>Next</AuthFormButton>
                    </AuthForm>
                )
            case 2:
                return (
                    <AuthForm onSubmit={this.handleRegisterSubmit}>
                        <AuthMessage>Almost there! Just a few more questions.</AuthMessage>
                        <AuthFormInputTitle>FBO Admin</AuthFormInputTitle>
                        <AuthFormInput
                            field='fboadmin'
                            fieldType='checkbox'
                            onChange={this.handleRoleInput} />
                        <AuthFormInputTitle>Flight Managment Admin</AuthFormInputTitle>
                        <AuthFormInput
                            field='flmadmin'
                            fieldType='checkbox'
                            onChange={this.handleRoleInput} />
                        <AuthFormInputTitle>Student Pilot</AuthFormInputTitle>
                        <AuthFormInput
                            field='student'
                            fieldType='checkbox'
                            onChange={this.handleRoleInput} />
                        <AuthFormInputTitle>Passenger</AuthFormInputTitle>
                        <AuthFormInput
                            field='passenger'
                            fieldType='checkbox'
                            onChange={this.handleRoleInput} />
                        <AuthFormButton >Register</AuthFormButton>
                    </AuthForm>
                )
            default:
                return (
                    <AuthForm onSubmit={this.checkUserEmail}>
                        <AuthMessage>Hello there!</AuthMessage>
                        <AuthFormInputTitle>Please enter your email:</AuthFormInputTitle>
                        <AuthFormInput
                            field='email'
                            fieldType='email'
                            value={this.state.email}
                            onChange={this.handleTextInput} />
                        <AuthFormButton>Next</AuthFormButton>
                    </AuthForm>
                )
        }
    }

    render(){
        return(
            <AuthContainer>
                {this.setAuthDisplay()}
            </AuthContainer>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState;
}

export default connect(mapStateToProps, {updateUser})(Auth);