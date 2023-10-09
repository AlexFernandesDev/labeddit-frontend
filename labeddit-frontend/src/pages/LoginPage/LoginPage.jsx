import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { Container, LoginText, Form, EmailContainer, PasswordContainer, EmailInput, PasswordInput, LoginButton, Hr, SignupButton } from "./styled";
import LogoLoginPage from "../../assets/LogoLoginPage.png"

export default function LoginPage() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const login = async (event) => {
        event.preventDefault()

        try {
            setIsLoading(true)

            const body = {
                email: form.email,
                password: form.password
            }

            const response = await axios.post(BASE_URL + "/users/login", body)
            window.localStorage.setItem(TOKEN_NAME, response.data.token)

            setIsLoading(false)
            goToHomePage(navigate)
        } catch (error) {
            setIsLoading(false)
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return (
        <Container>
            <section>
                <img src={LogoLoginPage} alt="Logotipo principal" />
                <LoginText>O projeto de rede social da Labenu</LoginText>

                <article>
                    <Form onSubmit={login} autoComplete="off">
                        <EmailContainer>
                            <EmailInput 
                                name={"email"}
                                value={form.email}
                                placeholder="E-mail"
                                onChange={changeForm}
                            />
                        </EmailContainer>

                        <PasswordContainer>
                            <PasswordInput
                                type="password" 
                                name={"password"}
                                value={form.password}
                                placeholder="Senha"
                                onChange={changeForm}
                            />

                        </PasswordContainer>
                        <LoginButton disabled={isLoading}>Continuar</LoginButton>
                    </Form>
                    <Hr/>
                    <SignupButton disabled={isLoading} onClick={() => goToSignupPage(navigate)}>Cadastre-se</SignupButton>
          
                </article>
            </section>
        </Container>
    )
}