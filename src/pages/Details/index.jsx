import { Container, Content } from "./styles";
import { Tag } from "../../components/Tag";
import PedidoPng from "../../assets/pedido.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { api } from "../../service/api";

import { IoIosArrowBack } from "react-icons/io";
export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();

  const imageURl = data && `${api.defaults.baseURL}/files/${data.img}`;

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
    }

    fetchPlate();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <div>
          <button className="backToPage" onClick={handleBack}>
            <IoIosArrowBack />
            Voltar
          </button>
        </div>

      { data &&
        <Content>
          <img
            className="plate"
            src={imageURl}
            alt=""
          />

        <div className="information">
          <div className="description">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>

          <div className="ingredients">
          {data.ingredient.map((item, index) => (
              <Tag title={item.name} key={index}/>
            ))}
          </div>

            <div className="price">
              <strong>R$ {data.price}</strong>
              <div className="count"><span>-</span> 01 <span>+</span></div>
              <Button icon={PedidoPng} title="incluir"/>
            </div>
            </div>
         

        </Content>
         }
      </main>

      <Footer/>
    </Container>
  );
}
