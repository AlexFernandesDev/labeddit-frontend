import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage } from "../../routes/coordinator";
import { useState } from "react";
import Header from "../../components/Header/Header";
import {
  WelcomeText,
  Form,
  Input,
  SignupButton,
  ContractSection,
  ContractSpan,
  CheckboxContainer,
  CheckboxInput,
  AgreeSpan,
} from "./styled";

export default function SignupPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(BASE_URL + "/users/signup", body);
      window.localStorage.setItem(TOKEN_NAME, response.data.token);

      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.reponse?.data);
    }
  };

  return (
    <main>
      <Header />
      <WelcomeText>
        Olá, boas vindas ao <br />
        LabEddit ;)
      </WelcomeText>
      <Form onSubmit={signup} autoComplete="off">
        <section>
          <Input
            name={"name"}
            value={form.name}
            onChange={changeForm}
            placeholder="Apelido"
          />
        </section>

        <section>
          <Input
            name={"email"}
            value={form.email}
            onChange={changeForm}
            placeholder="E-mail"
          />
        </section>

        <section>
          <Input
            type="password"
            name={"password"}
            value={form.password}
            onChange={changeForm}
            placeholder="Senha"
          />
        </section>
        <ContractSection>
          <p>
            Ao continuar, você concorda com o nosso{" "}
            <ContractSpan>Contrato de <br /> usuário</ContractSpan> e nossa{" "}
            <span>Política dePrivacidade</span>
          </p>
          
          <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <AgreeSpan>
                Eu concordo em receber emails sobre coisas legais <br /> no Labeddit
            </AgreeSpan>
          </CheckboxContainer> 
        </ContractSection>

        <SignupButton disabled={isLoading}>Cadastrar</SignupButton>
      </Form>
    </main>
  );
}
