import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TOKEN_NAME, BASE_URL } from "../../constants/url";
import Header from "../../components/Header/Header";
import CommentCard from "../../components/CommentCard/CommnetCard";     
import { Main, PostCard, PostOwnerContainer, ContentContainer, LikesCommentsContainer,  LikeDislikeContainer, LikeImg, DislikeImg, LikeCount, CommentContainer, CommentImg, CommentCount, CommentContent, CommentButton, Hr, CommentsContainer } from "./styled";
import Like from "../../assets/Like.png"
import Dislike from "../../assets/Dislike.png"
import CommentLogo from "../../assets/CommentLogo.png"

export default function PostDetailsPage() {

  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [commentContent, setCommentContent] = useState("")

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const token = window.localStorage.getItem(TOKEN_NAME);

        const config = {
          headers: {
            Authorization: token,
          },
        };

        const postResponse = await axios.get(BASE_URL + `/posts/${postId}`);

        const commentsResponse = await axios.get(BASE_URL + `/posts/${postId}/comments`, config);

        
        setPost(postResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  const createComment = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME)

      const config = {
        headers: {
          Authorization :token ,
        }
      }

      const body = {
        content: commentContent,
      }

      await axios.post(BASE_URL + `/posts/${postId}/comments`, body, config)

      const updatedCommentsResponse = await axios.get(
        BASE_URL + `/posts/${postId}/comments`,
        config
      );
      
      setComments(updatedCommentsResponse.data);
      setCommentContent("")
      setIsLoading(false)

    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
  <>
    <Header />
    <Main>
      <PostCard>
          <PostOwnerContainer>Enviado por:  {post.creator.name}</PostOwnerContainer>
          <ContentContainer> {post.content} </ContentContainer>
          <LikesCommentsContainer>
            <LikeDislikeContainer>
              <LikeImg src={Like}/>
              <LikeCount>{post.likes}</LikeCount>
              <DislikeImg src={Dislike}/>
            </LikeDislikeContainer>   
            <CommentContainer>
              <CommentImg src={CommentLogo} /> 
              <CommentCount>{post.commentCount}</CommentCount>
            </CommentContainer>        
          </LikesCommentsContainer>    
      </PostCard>
      
      <form onSubmit={createComment}>
        <CommentContent 
          value={commentContent}
          onChange={(e)=>setCommentContent(e.target.value)}
          placeholder="Adicionar comentário"
        />
         <CommentButton disabled={isLoading}>Responder</CommentButton>
      </form>
      <Hr/>
      <CommentsContainer>
        {comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment}/>
        })}
      </CommentsContainer>
      
    </Main>
      
  </>
  );
}