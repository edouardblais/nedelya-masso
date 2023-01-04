import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from './topnav/TopNav';
import Home from './home/Home';
import Accueil from './home/Accueil';
import About from './about/About';
import APropos from './about/APropos';
import ContactEn from './contact/ContactEn';
import ContactFr from './contact/ContactFr';
import ServicesFr from './services/ServicesFr';
import ServicesEn from './services/ServicesEn';
import Shop from './shop/Shop';
import Boutique from './shop/Boutique';

const App = () => {
  return (
    <BrowserRouter>
      <TopNav/>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
          <Route path='/fr/a-propos' element={<APropos/>}/>
          <Route path='/fr/services' element={<ServicesFr/>}/>
          <Route path='/fr/contact' element={<ContactFr/>}/>
          <Route path='/fr/boutique' element={<Boutique/>}/>
        <Route path='/en' element={<Home/>}/>
          <Route path='/en/about' element={<About/>}/>
          <Route path='/en/services' element={<ServicesEn/>}/>
          <Route path='/en/contact' element={<ContactEn/>}/>
          <Route path='/en/shop' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
