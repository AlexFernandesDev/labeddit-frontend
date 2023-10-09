import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    

`
export const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    min-height: 18vh;
    border: solid 1px #E0E0E0;
    border-radius: 12px;
    margin-left: 9.5vw;
    margin-top: 4vh;
`

export const PostOwnerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 1vh;
    margin-left: 3vw;
    margin-bottom: 1vh;
    font-size: small;
    color: #6F6F6F;
`

export const ContentContainer = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    text-align: left;
    padding-left: 3vw;
    padding-right: 3vw;
`

export const LikesCommentsContainer = styled.div`
    display: flex;
    width: 100%;
    margin-left: 3vw;
    margin-bottom: 1vh;
`

export const LikeDislikeContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4vh;
    margin-right: 3vw;
    padding: 0vh 0.8vh;
    border: 1px solid #E0E0E0;
    border-radius: 25px;
`

export const LikeImg = styled.img`
    margin-right: 4vw;
    width: 1.2em;
    height: 1.2em;
    
`

export const DislikeImg = styled.img`
    margin-left: 4vw;
    width: 1.2em;
    height: 1.2em;
`

export const LikeCount = styled.p`
    font-size: small;
    color: #6F6F6F;
    font-weight: bold;
`

export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4vh;
    padding: 0vh 1.5vh;
    border: 1px solid #E0E0E0;
    border-radius: 25px;
`

export const CommentImg = styled.img`
    margin-right: 4vw;
    width: 1.2em;
    height: 1.2em;
`

export const CommentCount = styled.p`
    font-size: small;
    color: #6F6F6F;
    font-weight: bold;
`

export const CommentContent = styled.textarea`
    width: 81%;
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

export const CommentButton = styled.button`
    width: 81%;
    height: 6vh;
    border-radius: 12px;
    margin-bottom: 1vh;
    background: linear-gradient(to right, #FF6489, #F9B24E);
    color: white;
    font-size: 1.1em;
`

export const Hr = styled.hr`
    width: 80vw;
    border-style: solid;
    color: #F9B24E;
    margin-bottom: 4vh;
`

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`