import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import LoginScreen from '../Pages/Login';
import Perfil from '../Pages/Perfil';
import Register from '../Pages/Register';
import Donate from '../Pages/Donate';
import NavbarComp from '../Components/NavBar';

const Rotas = () => {
  return ( 
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<LoginScreen />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
    );
};

export default Rotas;