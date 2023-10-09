import styled from "styled-components";

export const WelcomeText = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: xx-large;
    font-weight: bold;
    white-space: pre-line;
    text-align: left;
    margin-top: 5vh;
    margin-left: 10vw;
    margin-bottom: 20vh;
`

export const Form = styled.form`
   
`

export const Input = styled.input`
    width: 85%;
    height: 7vh;  
    border-radius: 4px;
    border: 2px solid #D5D8DE; 
    box-shadow: none; 
    margin-bottom: 1vh;

    &::placeholder {
        text-indent: 1.5vh;
        font-size: 1.2em;
    }
`

export const ContractSection = styled.div`
    width: 95%;
    font-size: 0.78em;
    text-align: left;
    padding-left: 8vw;
    margin-top: 7vh;
    font-family: 'Noto Sans', sans-serif;
`
export const ContractSpan = styled.span`
    color: #4088CB;   
`

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`

export const CheckboxInput = styled.input`
 height: 1.1em;
 width: 1.1em;
`

export const AgreeSpan = styled.span`
    margin-left: 2vw;
`

export const SignupButton = styled.button`
    width: 85%;
    height: 6vh;
    border-radius: 50px;
    margin-top: 4vh;
    margin-bottom: 1vh;
    background: linear-gradient(to right, #FF6489, #F9B24E);
    color: white;
    font-size: 1.1em;
    margin-bottom: 3vh;
`