import React, { useState } from 'react'
import Navegador from '../generales/Navegador'
import { listarUsuarios, actualizarUsuario, eliminarUsuario, crearUsuario } from "../../API/UsuariosAPI";
import FormUsuarios from './FormUsuarios';
import TableUsuarios from './TableUsuarios';

function Usuarios() {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState(null);

    const actualizarLista = () =>{
        listarUsuarios()
            .then((data)=>{setUsuarios(data)})
            .catch((error)=>{console.log(error)})
    }

    if (usuarios.length === 0) {
        actualizarLista();
    }

    const guardarUsuario = (usuario) =>{
        
        if (usuario._id === null) {
            crearUsuario(usuario)
                .then((data)=>{
                    actualizarLista();
                })
                .catch((error)=>{console.log(error)})
        }else{
            console.log(usuario)
            actualizarUsuario(usuario)
                .then((data)=>{
                    actualizarLista();
                })
                .catch((error)=>{console.log(error)})
        }
        setMostrarForm(false);
    }

    const borrarUsuario = (id) =>{
        eliminarUsuario(id)
            .then((data)=>{
                actualizarLista();
            })
            .catch((error)=>{console.log(error)})
    }
    
    const verUsuario = (usuario) =>{
        setUsuario(usuario);
        setMostrarForm(true);
    }

    return (
        <>
            <Navegador/>
            <div>
                {!mostrarForm && <button onClick={() => setMostrarForm(true)}>Crear usuario</button>}
                {mostrarForm && <button onClick={() => setMostrarForm(false)}>Ver lista de usuarios</button>}
            </div>
            {mostrarForm && <FormUsuarios onSave={guardarUsuario} setUser={usuario}/>}
            {!mostrarForm && <TableUsuarios usuarios={usuarios} onDelete={borrarUsuario} onView={verUsuario}/>}
        </>
    )
}

export default Usuarios   