import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TopBar = styled.div `
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 1vh 1vw;
`

export const Title = styled.h1 `
    color: #363635;
    font-size: 20px;
`

export const FlightList = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    max-height: 95%;
    width: 100%;
`

export const FlightBox = styled.div `
    background: #BAD1CD;
    color: #363635;
    margin-bottom: 1vh;
    width: 100%;
    border: 1px #363635 solid;
`

export const FlightHeader = styled.h2 `
    color: #363635;
    font-weight: bold;
    margin: 1vh 1vw;
`

export const FlightRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 1vh 1vw;
`