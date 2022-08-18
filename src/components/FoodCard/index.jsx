import { Container } from './styles';
import { Button } from '../Button';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';

export function FoodCard({ data }) {

    const imageURl = `${api.defaults.baseURL}/files/${data.img}`

    console.log(imageURl)

    return (
        <Container>
            <img src={imageURl} alt={data.title} />

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