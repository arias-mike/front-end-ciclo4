import React, { useEffect, useState } from 'react'
import Navegador from '../generales/Navegador'
import { listarUsuarios, actualizarUsuario, eliminarUsuario, crearUsuario } from "../../API/UsuariosAPI";
import FormUsuarios from './FormUsuarios';
import TableUsuarios from './TableUsuarios';
import { Button, Container } from "react-bootstrap";
import Footer from "../generales/Footer";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Usuarios() {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [isLoading, setLoading] = useState(false);

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

    const verListaUsuarios = () =>{
        setUsuario({
            _id: null,
            usuario: "",
            clave: "",
            rol:"",
            estado: "",
            persona: {
                _id: null,
                correo: ""
            }
        });
        setMostrarForm(true)
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
                console.log(mostrarForm);
                if(mostrarForm){
                    setMostrarForm(false)
                }else{
                    verListaUsuarios();
                }
            });
        }
    }, [isLoading, mostrarForm]);
    
    const handleClick = () => setLoading(true);

    return (
        <>
            <Navegador/>
            <Container>
                <div className="mb-3 mt-3 d-flex justify-content-end">
                    {!mostrarForm && 
                        <Button 
                            variant="outline-primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                        {isLoading ? 'Cargando…' : 'Crear Usuario'}
                        </Button>
                    }
                    {mostrarForm && 
                        <Button 
                            variant="outline-primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                            {isLoading ? 'Cargando…' : 'Ver lista de Usuarios'}
                        </Button>
                    }
                </div>
                {mostrarForm && <FormUsuarios onSave={guardarUsuario} setUser={usuario}/>}
                {!mostrarForm && <TableUsuarios usuarios={usuarios} onDelete={borrarUsuario} onView={verUsuario}/>}
            </Container>
            <Footer/>
        </>
    )
}

export default Usuarios   