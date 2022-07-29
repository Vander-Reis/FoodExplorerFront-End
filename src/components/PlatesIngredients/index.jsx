import { Container } from './styles';
import { Tag } from '../Tag';

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
            <div><h2>{data.price}</h2></div>

        </Container>
    );
}