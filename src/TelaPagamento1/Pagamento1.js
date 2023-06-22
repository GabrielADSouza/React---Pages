import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./Pagamento1.css";

import { IoMdArrowRoundBack } from 'react-icons/io';

function Pagamento1() {
  return (
    <>

      <Container>
        <Row>
          <Col>
            <h2>Forma de Pagamento</h2>

            <div className="containerCartao">
              <h2>Cartão de Crédito</h2>
              <input type="text" className="campo1" />
              <input type="text" className="campo2" />
              <input type="text" className="campo3" />
              <input type="text" className="campo4" />
              <input type="text" className="campo5" />
            </div>

            <div className="containerPix">
              <h2>Pix</h2>
            </div>

            <button className='backButton'><IoMdArrowRoundBack size={40} color='white'/></button>
          </Col>

          <Col>
            <div className="containerRightSide">
              <input type="text" className="campo6" />
              <button className='pedido'>Finalizar Pedido</button>
            </div>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default Pagamento1;