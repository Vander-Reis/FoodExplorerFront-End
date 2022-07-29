import { Container } from './styles';
import { PlatesIngredients } from '../../components/PlatesIngredients'
export function Details() {
    return (
        <Container>

            <img src="https://lh3.googleusercontent.com/56xjPGT3b2DM2q16yEigJxFSQuly2UJjnjuTBiLQRdgaLAlTSan5KXw8fKSh-eVT9nuiUlkWwBNsA-M-PvQi=w1366-h600" alt="" />

            <PlatesIngredients
                data={{
                    title: "Salada Ravanello",
                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
                    tags: [{name: "alface"}, {name: "tomate"}, {name: "rabanete"}, {name: "pão naan"}],
                    price: "R$ 25,97"
                }}
                />
        </Container>
    );
}