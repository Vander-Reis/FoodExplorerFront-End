import { Container, Content } from "./styles";
import imgHome from "../../assets/imgPrincipal.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <img src={imgHome} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>

          
        </div>

        

        <Section title={"Pratos principais"}>

            <FoodCard
              data={{
                title: "Salada Ravanello >",
                description:
                  "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                price: "49,97",
              }}
            />

            <FoodCard
              data={{
                title: "Salada Ravanello >",
                description:
                  "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                price: "49,97",
              }}
            />

            <FoodCard
              data={{
                title: "Salada Ravanello >",
                description:
                  "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                price: "49,97",
              }}
            />

            <FoodCard
              data={{
                title: "Salada Ravanello >",
                description:
                  "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                price: "49,97",
              }}
            />
            
        </Section>

        <Section title={"Sobremesas"}>
          <FoodCard
            data={{
              title: "Salada Ravanello >",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,97",
            }}
          />

          <FoodCard
            data={{
              title: "Salada Ravanello >",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,97",
            }}
          />

          <FoodCard
            data={{
              title: "Salada Ravanello >",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,97",
            }}
          />
        </Section>

        <Section title={"Bebidas"}>
          <FoodCard
            data={{
              title: "Salada Ravanello >",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,97",
            }}
          />

          <FoodCard
            data={{
              title: "Salada Ravanello >",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,97",
            }}
          />

          <FoodCard
            data={{
              title: "Salada Ravanello >",
              description:
                "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
              price: "49,97",
            }}
          />
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
