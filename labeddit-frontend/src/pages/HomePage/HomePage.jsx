import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container, Form, PostContent, PostButton, Hr, PostsContainer } from "./styled";

export default function HomePage() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;

  const [isLoading, setIsLoading] = useState(false);
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);

  const createPost = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const body = {
        content: postContent,
      };

      await axios.post(BASE_URL + "/posts", body, config);

      setPostContent("");
      setIsLoading(false);
      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <Container>
      <Header />
        <Form onSubmit={createPost}>     
            <PostContent
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Escreva seu post..."
            />  
          <PostButton disabled={isLoading}>Postar</PostButton>
        </Form>
      <Hr />

      <PostsContainer>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </PostsContainer>
      
    </Container>
  );
}
