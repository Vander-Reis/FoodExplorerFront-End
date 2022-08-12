import { Container } from './styles';
import imagemTeste from '../../assets/imgTeste.png';
import { Button } from '../Button';

export function FoodCard({ data }) {
    return (
        <Container>
            <img src={imagemTeste} alt="" />

            <button>
                <h3>{data.title}</h3>
            </button>
            <p>{data.description}</p>
            <strong>R$ {data.price}</strong>

            <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>

                <Button title={"Incluir"} />
            </div>
            
        </Container>
    );
}