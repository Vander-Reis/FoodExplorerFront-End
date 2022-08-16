import { Container, Form, InputWrapper, ImgPlate, InputItem } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { IngredientsItem } from "../../components/IngredientsItem";
import { Textarea } from "../../components/Textarea";
import { MdOutlineFileUpload } from "react-icons/md";

export function New() {
  return (
    <Container>
      <Header />

      <main>
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
                accept="image/png, image/jpeg"
                placeholder="Selecione imagem"
                icon={MdOutlineFileUpload}
              />
              
              </ImgPlate>
            </div>

            <div className="flex">
              <label htmlFor="event-name">Nome</label>
              <Input
                id="event-name"
                type="text"
                placeholder="Ex.: Salada Caesar"
              />
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="flex">
              <label htmlFor="plate-ingredientes">Ingredientes</label>

              <InputItem>
        
                    <IngredientsItem
                      placeholder="Pão Naan"
                    />
                  
                  <IngredientsItem
                    isNew
                    placeholder="Adicionar"
                    
                  />
                </InputItem>
            </div>

            <div>
              <label htmlFor="plate-price">Preço</label>
              <Input type="text" id="plate-price" placeholder="R$ 00,00" />
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="textarea">
            <label htmlFor="">Descrição</label>
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            </div>
          </InputWrapper>

          <div className="buttons">
            <button>Adicionar pedido</button>
          </div>
          
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
