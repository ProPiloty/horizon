import styled from 'styled-components';

// STYLED COMPONENTS
export const AuthContainer = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EAFFF6;
`

export const AuthForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    background: #A5D0A8;
`

export const AuthMessage = styled.h3 `
    text-align: center;
    color: #363635;
    font-size: 40px;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 15px;
`
export const AuthFormInputContainer = styled.div.attrs(() => ({

}))`
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // border-bottom: 2px #363635 solid;
    // margin: 15px 0;
    // padding: 0;
    // width: 50%;
    // height: 30px;
`

export const AuthFormInputTitle = styled.span.attrs(() => ({

}))`
    font-size: 20px;
    font-weight: bold;
    width: 50%;
    margin-top: 15px;
`

export const AuthFormInput = styled.input.attrs(({field, fieldType}) => ({
    type: fieldType,
    placeholder: field,
}))`
    font-size: 20px;
    width: 50%;
    height: 30px;
    background: #A5D0A8;
    border: none;
    border-bottom: 2px #363635 solid;
`

export const AuthFormButton = styled.button.attrs({

})`
    margin-top: 15px;
    margin-bottom: 50px;
    width: 50%;
    height: 40px;
    background: #363635;
    color: #5A93C5;
    border: none;
    font-size: 20px;
`