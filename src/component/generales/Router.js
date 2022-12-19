import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Personas from "./../personas/Personas";
import Usuarios from "./../usuarios/Usuarios";
import Login from '../usuarios/Login';
import Transacciones from '../transacciones/Transacciones';
import Productos from '../productos/Productos';

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/personas' element={<Personas/>}/>
                <Route path='/usuarios' element={<Usuarios/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/transacciones' element={<Transacciones/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router