import React from 'react';
import logo from '../assets/logo.jpg';
import "./Pagamento2.css";
import Container from 'react-bootstrap/Container';

import { IoMdArrowRoundForward } from 'react-icons/io';

function Pagamento2() {
  return (
    <>

      <div className="image-container">
        <img src={logo} alt="Imagem" className="center-image" />
      </div>

      <Container>


        <div className="containerMain">
          <h3>Endereço Cadastrado</h3>
          <div className="enderecoCadastro">
            <label htmlFor="" className="endereco">Rua xxxxxx-xxx</label>
          </div>

          <div className="containerDown">
            <h3 className="endereco">Endereço Selecionado</h3>
            <label htmlFor="" className="rua">Rua xxxxxx-xxx</label>

            <label htmlFor="" className="cep">Cep xxxxxx-xxx</label>
          </div>

          <hr></hr>

          <h3>Entrega Estimada</h3>

          <div className="containerConfirma">
            <label htmlFor="" className="rua">Entrega normal: R$32,99</label>

            <label htmlFor="" className="cep">35 - 50 min</label>
          </div>
        </div>

        <button className='nextButton'><IoMdArrowRoundForward size={40} color='white' /></button>

      </Container>

    </>
  )
}

export default Pagamento2;