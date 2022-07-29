import { Container, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import PolygonPng from '../../assets/Polygon.svg'

export function SignUp() {
    return (
        <Container>

            <div>
                <img src={PolygonPng} alt="logo explorer" />
                <h1>food explorer</h1>
            </div>

            <Form>

                <h1>Crie sua conta</h1>

                <label htmlFor="userName">Seu nome</label>
                <Input type="text" id="userName" placeholder="Exemplo: Maria da Silva"/>

                <label htmlFor="userEmail">Email</label>
                <Input type="email" id="userEmail" placeholder="Exemplo: exemplo@exemplo.com.br"/>

                <label htmlFor="userPassword">Senha</label>
                <Input type="password" id="userPassword" placeholder="No mínimo 6 caracteres"/>

                <Button title="Criar conta"/>

                <a href="/">Já tenho uma conta</a>
            </Form>

        </Container>
    );
}