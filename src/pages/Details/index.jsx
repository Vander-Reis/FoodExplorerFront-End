import { Container, Content } from "./styles";
import { PlatesIngredients } from "../../components/PlatesIngredients";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { IoIosArrowBack } from "react-icons/io";
export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <button className="backToPage">
            <IoIosArrowBack />
            Voltar
          </button>
        </div>

        <Content>
          <img
            className="plate"
            src="https://lh5.googleusercontent.com/WiwmcTQKRCm_r0TnIKw6uLIqtJCJVJo_TFTemMqri5kHEUbTiCUrDxopB93ndPLTWzQjXXcOUacP37sWqCAc=w1366-h657"
            alt=""
          />

          <PlatesIngredients
            data={{
              title: "Salada Ravanello",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              tags: [
                { name: "alface" },
                { name: "tomate" },
                { name: "rabanete" },
                { name: "pão naan" },
              ],
              price: "R$ 25,97",
            }}
          />
        </Content>
      </main>

      <Footer/>
    </Container>
  );
}
