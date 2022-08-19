import { Container } from './styles';
import { Button } from '../Button';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';

export function FoodCard({ data }) {

    const imageURl = `${api.defaults.baseURL}/files/${data.img}`

    const { user } = useAuth();
    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    function handleIditPlate(id) {
        navigate(`/edit/${id}`);
    }

    return (
        <Container>

            <button className='edit-plate' onClick={() => handleIditPlate(data.id)}>
                {user.is_admin === 1 && (
                    <BsPencil/>
                )} 
            </button>

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
            
            <button className='favorites'>
                <AiOutlineHeart/>
            </button>

        </Container>
    );
}