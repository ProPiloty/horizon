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
    margin: 1vh 0;
`

export const Title = styled.h1 `
    color: black;
    font-size: 20px;
`

export const BoxContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 95%;
    max-height: 95%;
    overflow-y: scroll;
`

export const Box = styled.div `
    background: slategray;
    margin-bottom: 1vh;
    width: 100%;
`

export const BoxTitle = styled.h1 `
    font-size: 20px;
    color: black;
    font-weight: bold;
`

export const BoxRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 1vh 1vw;
`

export const BoxColumn = styled.div `
    display: flex;
    flex-direction: column;
`

export const DetailType = styled.h2 `
    font-size: 18px;
    color: black;
    font-weight: bold;
`

export const FlightDetails = styled.h3 `
    font-size: 16px;
    color: black;
    margin-top: .5vh;
`

export const FlightInfo = styled.h3 `
    font-size: 16px;
    color: black;
    margin: 1vh 0;
`

export const ServiceDetails = styled.h3 `
    font-size: 16px;
    color: black;
    margin-top: .5vh;
`

export const BoldSpan = styled.span `
    font-weight: bold;
`
