import { Container, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import PolygonPng from '../../assets/Polygon.svg'

export function SingIn() {
    return (
        <Container>

            <div>
                <img src={PolygonPng} alt="logo explorer" />
                <h1>food explorer</h1>
            </div>

            <Form>

                <h1>Faça login</h1>

                <label htmlFor="userEmail">Email</label>
                <Input type="email" id="userEmail" placeholder="Exemplo: exemplo@exemplo.com.br"/>

                <label htmlFor="userPassword">Senha</label>
                <Input type="password" id="userPassword" placeholder="No mínimo 6 caracteres"/>

                <Button title="Entrar"/>

                <a href="/">Criar uma conta</a>
            </Form>

        </Container>
    );
}