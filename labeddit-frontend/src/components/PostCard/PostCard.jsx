import axios from "axios"
import { useContext, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL, TOKEN_NAME } from "../../constants/url"
import { useNavigate } from "react-router-dom";
import { goToPostDetailsPage } from "../../routes/coordinator";
import { Container, PostOwnerContainer, ContentContainer, LikesCommentsContainer, LikeDislikeContainer, LikeImg, DislikeImg, LikeCount , CommentContainer, CommentImg, CommentCount } from "./styled";
import Like from "../../assets/Like.png"
import Dislike from "../../assets/Dislike.png"
import CommentLogo from "../../assets/CommentLogo.png"

export default function PostCard(props) {
    const { post } = props

    const context = useContext(GlobalContext)
    const { fetchPosts } = context

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const like = async () => {
        setIsLoading(true);

        try {
            const token = window.localStorage.getItem(TOKEN_NAME)

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const body = {
                like: true
            }

            await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)

            setIsLoading(false)
            fetchPosts()
        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return (
        <Container>
            <PostOwnerContainer>
                Enviado por: {post.creator.name}
            </PostOwnerContainer>
            <ContentContainer>
                {post.content}
            </ContentContainer>
           <LikesCommentsContainer>
                <LikeDislikeContainer onClick={like}>
                    <LikeImg src={Like}  style={{ cursor: "pointer" }}/>
                    <LikeCount>{post.likes}</LikeCount>
                    <DislikeImg src={Dislike} style={{ cursor: "pointer" }}/>
                </LikeDislikeContainer>
                
                <CommentContainer>
                    <CommentImg src={CommentLogo} onClick={() => {goToPostDetailsPage(navigate, post.id)}}/> <CommentCount>{post.commentCount}</CommentCount>
                </CommentContainer>             
           </LikesCommentsContainer>
            
        </Container>
    )
}