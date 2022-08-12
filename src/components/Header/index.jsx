import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import PolygonPng from '../../assets/Polygon.svg'
import PedidoPng from '../../assets/pedido.svg'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header() {
    return (
        <Container>
            <div className="logo">
                <img src={PolygonPng} alt="Logo" />
                <h1>food explorer</h1>
            </div>

            <div className="menu-mobile">
                =
            </div>

            <ButtonText title="Meus favoritos"/>

            <Input className="input"
            icon={FiSearch}
            placeholder="Busque pelas opções de pratos" />
            
            <Button 
            icon={PedidoPng}
            title="Meu pedido (0)"/>

            <button className='logout'>
                <FiLogOut/>
            </button>
        </Container>
    );
}