import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    margin-top: 0;
    display: flex;
    flex-direction: column;
`
export const Form = styled.form`
    width: 100%;
`
export const PostContent = styled.textarea`
    width: 80%;
    height: 15vh;
    margin-top: 5vh;
    margin-bottom: 1vh;
    border: none;
    border-radius: 12px;
    background-color: #EDEDED;

    &::placeholder {
        text-indent: 1.8vh;
        font-size: 1.2em;
        font-family: 'IBM Plex Sans', sans-serif;
        line-height: 3
    }
`

export const PostButton = styled.button`
    width: 80%;
    height: 6vh;
    border-radius: 12px;
    margin-bottom: 3vh;
    background: linear-gradient(to right, #FF6489, #F9B24E);
    color: white;
    font-size: 1.1em;
`

export const Hr = styled.hr`
    width: 80vw;
    margin-bottom: 4vh;
    border-style: solid;
    color: #F9B24E;
`

export const PostsContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`