import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import imgHome from "../../assets/imgPrincipal.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";
import { api } from "../../service/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [plates, setPlates] = useState([]);
  let typePlates;
  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(
        `/plates?title=${search}&ingredient=${search}`
      );
      setPlates(response.data);
    }

    fetchPlates();
  }, [search]);

  if (plates.length > 0) {
    typePlates = plates.map((e) => e);
  }

  console.log(typePlates);

  return (
    <Container>
      <Header setSearch={setSearch} />

      <Content>
        <div>
          <img src={imgHome} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <Section title="Pratos principais">
          {plates.length > 0 && (
            <>
              {plates.map((item, index) => (
                <FoodCard key={index} data={item} />
              ))}
            </>
          )}
        </Section>

      </Content>

      <Footer />
    </Container>
  );
}
