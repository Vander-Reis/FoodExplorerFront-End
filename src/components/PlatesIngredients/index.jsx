import { Container } from './styles';
import { Tag } from '../Tag';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';
import { FiPlus, FiMinus } from 'react-icons/fi'
import PedidoPng from '../../assets/pedido.svg'


export function PlatesIngredients({ data, ...rest }){
    return(
        <Container {...rest}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <footer>
                {data.tags.map( (tag, index) => (
                    <Tag key={index} title={tag.name}/>
                ))}
            </footer>
            <div>
                <h2>{data.price}</h2>
                <div className="amount">
                    <ButtonText icon={FiMinus}/>
                    <span>01</span>
                    <ButtonText icon={FiPlus}/>
                </div>
                <Button className="include" icon={PedidoPng} title="incluir"/>
            </div>

        </Container>
    );
}