import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import SobreNos from './paginas/sobrenos/SobreNos';
import Sobre from './paginas/sobrenos/SobreNos';
import './App.css';
import Login  from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'

function App() {
  return (
      <Router>
        <Navbar />
          <div style={{ minHeight: '100vh'}}>
          <Routes> /
            <Route path="/" element={<Login />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          </Routes>
          </div>
        <Footer />
      </Router>
  );
}

export default App;
