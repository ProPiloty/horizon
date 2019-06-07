import React, {Component} from 'react';

// STYLED COMPONENTS
import {
    AuthContainer,
    AuthForm,
    AuthMessage,
    AuthFormInputContainer,
    AuthFormInputTitle,
    AuthFormInput,
    AuthFormButton
} from './AuthStyles';

// AUTH COMPONENT
class Auth extends Component {
    constructor(){
        super();
        this.state = {
            step: 2,
            emailInput: '',
            passwordInput: '',
            firstNameInput: '',
            lastNameInput: '',
        };
    }

    setStepToLogin(){
        this.setState({step: 0});
    }

    setStepToRegister(){
        this.setState({step: 1});
    }

    setAuthDisplay(){
        switch(this.state.step){
            case 0:
                return (
                    <AuthForm>
                        <AuthMessage>Welcome back [email]!</AuthMessage>
                        <AuthFormInputContainer>
                            <AuthFormInput
                                field='password' fieldType='password' />
                        </AuthFormInputContainer>
                        <AuthFormButton>Log In</AuthFormButton>
                    </AuthForm>
                )
            case 1:
                return (
                    <AuthForm>
                        <AuthMessage>Sorry! We couldnt find an account with that email.</AuthMessage>
                        <AuthFormInputTitle>All we need from you is your email,</AuthFormInputTitle>
                        <AuthFormInput
                            field='email'
                            fieldType='email' />
                        <AuthFormInputTitle>first name,</AuthFormInputTitle>
                        <AuthFormInput
                            field='firstname'
                            fieldType='text' />
                        <AuthFormInputTitle>last name,</AuthFormInputTitle>
                        <AuthFormInput
                            field='lastname'
                            fieldType='text' />
                        <AuthFormInputTitle>and password.</AuthFormInputTitle>
                        <AuthFormInput
                            field='password'
                            fieldType='password' />
                        <AuthFormInputTitle>And just to be sure...</AuthFormInputTitle>
                        <AuthFormInput
                            field='password'
                            fieldType='password' />
                        <AuthFormButton>Next</AuthFormButton>
                    </AuthForm>
                )
            case 2:
                return (
                    <AuthForm>
                        <AuthMessage>Sorry! We couldnt find an account with that email.</AuthMessage>
                        <AuthFormInputTitle>FBO Admin</AuthFormInputTitle>
                        <AuthFormInput
                            field='email'
                            fieldType='checkbox' />
                        <AuthFormInputTitle>Flight Managment Admin</AuthFormInputTitle>
                        <AuthFormInput
                            field='firstname'
                            fieldType='checkbox' />
                        <AuthFormInputTitle>Student Pilot</AuthFormInputTitle>
                        <AuthFormInput
                            field='lastname'
                            fieldType='checkbox' />
                        <AuthFormInputTitle>Passenger</AuthFormInputTitle>
                        <AuthFormInput
                            field='password'
                            fieldType='checkbox' />
                        <AuthFormButton>Next</AuthFormButton>
                    </AuthForm>
                )
            default:
                return (
                    <AuthForm>
                        <AuthMessage>Hello there!</AuthMessage>
                        <AuthFormInputTitle>Please enter your email:</AuthFormInputTitle>
                        <AuthFormInput
                            field='generalkenobi@gmail.com' fieldType='email' />
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

export default Auth;