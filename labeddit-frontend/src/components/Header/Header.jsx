import { useLocation, useNavigate } from "react-router-dom";
import { TOKEN_NAME } from "../../constants/url";
import { goToLoginPage } from "../../routes/coordinator";
import { Container, Logo, LogoContainer, LoginLogoutButton } from "./styled";
import LogoHeader from "../../assets/LogoHeader.png"

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }

    return(
        <Container>
            <LogoContainer>
                <Logo src={LogoHeader} alt="Logotipo header" />
            </LogoContainer>
            
            {location.pathname === "/signup" ? (
                <LoginLogoutButton onClick={() => navigate("/login")}>Entrar</LoginLogoutButton>
            ) : (
                <LoginLogoutButton onClick={logout}>Logout</LoginLogoutButton>
            )}
            
        </Container>
    )
}