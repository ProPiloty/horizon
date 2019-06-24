import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

export const TopBar = styled.div `
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 1vh 0;
`

export const Title = styled.h1 `
    color: black;
    font-size: 20px;
`

export const BoxContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: black;
    width: 95%;
    height: 10vh;
    overflow-y: scroll;
`

export const Box = styled.div `
    background: slategray;
    width: 100%;
`