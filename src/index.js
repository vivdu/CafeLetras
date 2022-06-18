import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Ninos from './pages/Ninos';
import Adultos from './pages/Adultos';
import Hogar from './pages/Hogar';

import ShopBookList from './pages/ShopBookList';
import InputShop from './pages/InputShop';
import PayBook from './pages/PayBook';
import Reservas from './pages/Reservas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/CafeLetras/' element={<Home />}></Route>
    <Route path='/reservas' element={<Reservas />}></Route>
    <Route path='/tienda' element={<ShopBookList />}></Route>
    <Route path='/tienda/login' element={<InputShop />}></Route>
    <Route path='/tienda/login/pago' element={<PayBook />}></Route>
    <Route path='/catalogo/' element={<Catalogo/>}></Route>
    <Route path='/catalogo/ninos' element={<Ninos/>}></Route>
    <Route path='/catalogo/adultos' element={<Adultos/>}></Route>
    <Route path='/catalogo/hogar' element={<Hogar/>}></Route>
    
  </Routes>
 </BrowserRouter>
);
