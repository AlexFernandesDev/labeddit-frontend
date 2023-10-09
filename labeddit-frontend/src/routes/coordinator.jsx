export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToSignupPage = (navigate) => {
  navigate("/signup");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToPostDetailsPage = (navigate, postId) => {
  navigate(`/posts/${postId}`);
};

export const goToCreateRecipePage = (navigate) => {
  navigate("/recipe/new");
};
