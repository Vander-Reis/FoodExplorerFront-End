import { Container } from './styles';
import { Button } from '../Button';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function FoodCard({ data }) {

    const imageURl = `${api.defaults.baseURL}/files/${data.img}`

    // const { user } = useAuth();
    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    console.log(data.id)

    return (
        <Container>
            <img src={imageURl} alt={data.title} />

            <button type='button' onClick={() => handleDetails(data.id)}>
                <h3>{data.title}</h3>
            </button>
            <p>{data.description}</p>
            <strong>R$ {data.price}</strong>

            <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>

                <Button title={"Incluir"}/>
            </div>
            
        </Container>
    );
}