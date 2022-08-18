import { Container, Form, InputWrapper, ImgPlate, InputItem } from "./styles";
import {IoIosArrowBack} from "react-icons/io";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientsItem } from "../../components/IngredientsItem";
import { Textarea } from "../../components/Textarea";
import { MdOutlineFileUpload } from "react-icons/md";
import PolygonPng from "../../assets/Polygon.svg";
import PedidoPng from "../../assets/pedido.svg";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { api } from "../../service/api"

export function New() {

  const [title, setTitle ] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription ] = useState("");
  const [type, setType] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();
  
  // ingredientes

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    );
    setNewIngredient('');
  }

  async function handleNewPlate() {
    if(!title || !price || !description || !type) {
      alert("Favor preecha todos os campos!");
    }
  
    const formData = new FormData();
    formData.append('img', imageFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type)

    for (let i = 0; i < ingredients.length; i += 1) {
      formData.append('ingredients', ingredients[i]);
    }

    console.log(ingredients)

    await api.post("/plates", formData)
    .then(alert("Prato criado com sucesso!"))
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao criar o prato");
      }
    });

    navigate(-1);

  }


  function backToHome() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <div className="logo">
          <img src={PolygonPng} alt="Logo" />
          <h1>food explorer</h1>
        </div>

        <div className="buttons">
          <span>Administrador</span>
          <Button icon={PedidoPng} title="Meu pedido (0)" />
        </div>
      </header>

      <main>
        <button className="button-back" onClick={backToHome}>
          <IoIosArrowBack/>
          voltar
        </button>
        <h2>Editar Prato</h2>
        <Form>
          <InputWrapper>
            <div>
              <span>Selecione imagem</span>
              <ImgPlate>
              <label htmlFor="file-img">Imagem do prato</label>

              <Input
                id="file-img"
                type="file"
                placeholder="Selecione imagem"
                icon={MdOutlineFileUpload}
                onChange={e => setImageFile(e.target.value)}
              />
              
              </ImgPlate>
            </div>

            <div className="flex">
              <label htmlFor="event-name">Nome</label>
              <Input
                id="event-name"
                type="text"
                placeholder="Ex.: Salada Caesar"
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="flex">
              <label htmlFor="plate-ingredientes">Ingredientes</label>

              <InputItem>
                  {ingredients.map((ingredient, index) => (
                    <IngredientsItem
                      key={String(index)}
                      onChange={e => setNewIngredient(e.target.value)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <IngredientsItem
                    isNew
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </InputItem>
            </div>

            <div>
              <label htmlFor="plate-price">Preço</label>
              <Input type="text" id="plate-price" placeholder="R$ 00,00" 
              onChange={e => setPrice(e.target.value)}/>
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="textarea">
            <label htmlFor="text-area">Descrição</label>
            <Textarea id="text-area"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}/>
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="textarea">
            <label htmlFor="type">Escolha seu tipo de prato</label>
            <Input id="type" placeholder=" 1 = Pratos principais, 2 = Sobremesas, 3 = Bebidas"
            onChange={e => setType(e.target.value)}/>
            </div>
          </InputWrapper>

          <div className="buttons">
            <button type="button" onClick={handleNewPlate}>Adicionar pedido</button>
          </div>
          
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
