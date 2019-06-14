import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 100%;
    background: aquamarine;
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

export const FlightList = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 95%;
`

export const FlightBox = styled.div `
    background: slategray;
    margin-bottom: 1vh;
    width: 100%;
`

export const FlightHeader = styled.h2 `
    color: black;
    font-weight: bold;
`