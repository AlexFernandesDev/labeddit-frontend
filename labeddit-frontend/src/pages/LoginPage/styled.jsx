import styled from "styled-components";

export const Container = styled.div`
    display: flex; 

`

export const LoginText = styled.p`
  margin-top: 0vh;
  margin-bottom: 12vh;
  font-family: 'IBM Plex Sans', sans-serif;

`

export const Form = styled.form`
    display: flex;   
    flex-direction: column;
    width:100%;
` 
export const EmailContainer = styled.section`
    display: flex;  
    width: 80vw;
    margin-bottom: 2vh;
    margin-top: 1vh;
`            
export const EmailInput = styled.input`
    width: 100%;
    height: 7vh;  
    border-radius: 4px;
    border: 2px solid #D5D8DE; 
    box-shadow: none; 

    &::placeholder {
        text-indent: 1.5vh;
        font-size: 1.2em;
    }
 
` 
export const PasswordContainer = styled.section`
    display: flex;  
    width: 80vw;
    margin-bottom: 2vh;
`  
export const PasswordInput = styled.input`
    width: 100%;
    height: 7vh;
    border: 2px solid #D5D8DE;
    box-shadow: none; 

    &::placeholder {
        text-indent: 1.5vh;
        font-size: 1.2em;
    }
  
`  

export const LoginButton = styled.button`
    width: 100%;
    height: 6vh;
    border-radius: 50px;
    margin-top: 6vh;
    margin-bottom: 1vh;
    background: linear-gradient(to right, #FF6489, #F9B24E);
    color: white;
    font-size: 1.1em;
`   

export const Hr = styled.hr`
    width: 80vw;
    border-style: solid;
    color: #F9B24E;
`

export const SignupButton = styled.button`
    width: 100%;
    height: 6vh;
    margin-top: 1vh;
    background-color: white;
    border-color: #FE7E02;
    color: #FE7E02;
    border-radius: 50px;
    font-size: 1.1em;
`
