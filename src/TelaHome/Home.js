import React from 'react';
import logo from '../assets/logo.jpg';
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
       <div className="image-container">
        <img src={logo} alt="Imagem" className="center-image" />
       </div>
       <div className="containerButtons">
       <div class="login-button">
              <Link to="/cadastro"><button>Cadastro</button></Link>
        </div>
        <div class="login-button">
              <Link to="/pagamento1"><button>Pagamento 1</button></Link>
        </div>
        <div class="login-button">
              <Link to="/pagamento2"><button>Pagamento 2</button></Link>
        </div>
       </div>
    </div>
  );
}

export default Home;