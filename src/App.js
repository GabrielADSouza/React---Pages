import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './TelaHome/Home';
import Cadastro from './TelaCadastro/Cadastro';
import Pagamento1 from './TelaPagamento1/Pagamento1';
import Pagamento2 from './TelaPagamento2/Pagamento2';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pagamento1" element={<Pagamento1 />} />
        <Route path="/pagamento2" element={<Pagamento2 />} />
      </Routes>
  );
}

export default App;
