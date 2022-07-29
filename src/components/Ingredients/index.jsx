import { Container } from "./styles";
import AlfaceImage from "../../assets/alface.svg";
import TomateImage from "../../assets/tomate.svg";
import RabaneteImage from "../../assets/rabanete.svg";
import PaonaanImage from "../../assets/paonaan.svg";

export function Ingredients({ IngredientsName }) {

  return (
    <Container>
        <span>{IngredientsName == "alface" ? <img src={AlfaceImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "tomate" ? <img src={TomateImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "rabanete" ? <img src={RabaneteImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "pão naan" ? <img src={PaonaanImage} alt=""/> : ""}</span>
    </Container>
    );
}
