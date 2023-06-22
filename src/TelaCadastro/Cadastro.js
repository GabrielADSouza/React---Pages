import React from 'react';
import "./Cadastro.css";
import Logo from '../assets/logo.jpg';
import Food12 from '../assets/food12.png';

function Cadastro() {
  return (
    
    <>
    <div class="logocad">
      <img src={Logo} alt="Vegan Food" />
    </div>

          <div class="container"> 
        <div class="form-image"> 
            <img src={Food12} alt="Vegan Food" /> 
        </div>
      <div class="form">
        <form action="#">
          <div class="form-header">
            <div class="title">
              <h1>Cadastre-se</h1>
            </div>
            <div class="login-button">
              <button><a href="#">Entrar</a></button>
            </div>
          </div>

          <div class="input-group">
            <div class="input-box">
              <label for="firstname">Nome Completo</label>
              <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome"
                required />
            </div>
            <div class="input-box">
              <label for="cpf">CPF</label>
              <input id="cpf" type="number" name="cpf" placeholder="Digite seu CPF" required />
            </div>
            <div class="input-box">
              <label for="enderess">Endereço</label>
              <input id="enderess" type="text" name="enderess" placeholder="Digite seu endereço" required />
            </div>
            <div class="input-box">
              <label for="number">Número</label>
              <input id="number" type="number" name="number" placeholder="Digite o número" required />
            </div>
            <div class="input-box">
              <label for="complement">Complemento</label>
              <input id="complement" type="text" name="complement" placeholder="" />
            </div>
            <div class="input-box">
              <label for="neighborhood">Bairro</label>
              <input id="neighborhood" type="text" name="neighborhood" placeholder="Digite seu bairro" />
            </div>
            <div class="input-box">
              <label for="city">Cidade</label>
              <input id="city" type="text" name="city" placeholder="Digite sua cidade" />
            </div>
            <div class="input-box">
              <label for="cep">CEP</label>
              <input id="cep" type="number" name="cep" placeholder="Digite seu CEP" />
            </div>
            <div class="input-box">
              <label for="estate">Estado</label>
              <input id="estate" type="text" name="estate" placeholder="Digite a sigla do seu estado" />
            </div>
            <div class="input-box">
              <label for="phone">Telefone</label>
              <input id="phone" type="number" name="phone" placeholder="(xx) x xxxx-xxxx" required />
            </div>

            <div class="gender-inputs">
              <div class="gender-title">
                <h6>Gênero</h6>
              </div>

              <div class="gender-group">
                <div class="gender-input">
                  <input type="radio" id="female" name="gender" />
                  <label for="female">Feminino</label>
                </div>

                <div class="gender-input">
                  <input type="radio" id="male" name="gender" />
                  <label for="male">Masculino</label>
                </div>

                <div class="gender-input">
                  <input type="radio" id="others" name="gender" />
                  <label for="others">Outros</label>
                </div>

                <div class="gender-input">
                  <input type="radio" id="none" name="gender" />
                  <label for="none">Prefiro não dizer</label>
                </div>
              </div>
            </div>

            <div class="continue-button">
              <button><a href="#">Continuar <i class="fa-solid fa-angle-up"></i></a></button>
            </div>
          </div>
        </form>
      </div>
      </div>
      </>
        );
      }

        export default Cadastro;