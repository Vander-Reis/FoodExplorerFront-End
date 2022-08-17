import { FiSearch, FiLogOut } from "react-icons/fi";
import { Container } from "./styles";
import PolygonPng from "../../assets/Polygon.svg";
import PedidoPng from "../../assets/pedido.svg";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom'; 

export function Header() {

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleNew() {
    navigate("/new");
  }

  return (
    <Container>
      <div className="logo">
        <img src={PolygonPng} alt="Logo" />
        <h1>food explorer</h1>
      </div>

      {user.is_admin === 0 ? (
        <>
          <ButtonText title="Meus favoritos" />

        </>
      ) : (
        <button className="buttonText" type="button" onClick={handleNew}>
          Administrador
        </button>
      )}

        <Input
            className="input"
            icon={FiSearch}
            placeholder="Busque pelas opções de pratos"
          />

      <Button icon={PedidoPng} title="Meu pedido (0)" />

      <button className="logout" onClick={signOut}>
        <FiLogOut />
      </button>
    </Container>
  );
}
