import {
  Container,
  PostOwnerContainer,
  ContentContainer,
  LikesCommentsContainer,
  LikeDislikeContainer,
  LikeImg,
  DislikeImg,
  LikeCount,
  CommentContainer,
  CommentImg,
  CommentCount,
} from "./styled";
import Like from "../../assets/Like.png";
import Dislike from "../../assets/Dislike.png";
import CommentLogo from "../../assets/CommentLogo.png";

export default function CommentCard(props) {
  const { comment } = props;

  return (
    <Container>
      <PostOwnerContainer>Enviado por: {comment.creator.name}</PostOwnerContainer>
      <ContentContainer>{comment.content}</ContentContainer>
      <LikesCommentsContainer>
        <LikeDislikeContainer>
          <LikeImg src={Like} style={{ cursor: "pointer" }} />
          <DislikeImg src={Dislike} style={{ cursor: "pointer" }} />
        </LikeDislikeContainer>
      </LikesCommentsContainer>
    </Container>
  );
}
