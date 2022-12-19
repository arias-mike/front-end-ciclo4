import React, { useEffect, useState } from "react";
import { actualizarPersona, crearPersona, eliminarPersona, listarPersonas } from "../../API/PersonasAPI";
import Navegador from "../generales/Navegador";
import FormPersonas from "./FormPersonas";
import TablaPersonas from "./TablaPersonas";
import { Button, Container } from "react-bootstrap";
import Footer from "../generales/Footer";
//import { useParams } from "react-router";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Personas(){
    const [mostrarForm, setMostrarForm] = useState(false);
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const actualizarLista = () =>{
        listarPersonas()
            .then((data)=>{setPersonas(data)})
            .catch((error)=>{console.log(error)})
    }

    if (personas.length === 0) {
        actualizarLista();
    }

    const guardarPersona = (persona) =>{
        
        if (persona._id === null) {
            crearPersona(persona)
                .then((data)=>{
                    actualizarLista();
                })
                .catch((error)=>{console.log(error)})
        }else{
            console.log(persona)
            actualizarPersona(persona)
                .then((data)=>{
                    actualizarLista();
                })
                .catch((error)=>{console.log(error)})
        }
        setMostrarForm(false);
    }

    const borrarPersona = (id) =>{
        eliminarPersona(id)
            .then((data)=>{
                actualizarLista();
            })
            .catch((error)=>{console.log(error)})
    }
    
    const verPersona = (persona) =>{
        setPersona(persona);
        setMostrarForm(true);
    }

    const verListaPersonas = () =>{
        setPersona({
            _id: null,
            nombres: "",
            apellidos: "",
            tipDoc: "-",
            numDoc: "",
            direccion: "",
            telefono: "",
            correo: "",
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
                    verListaPersonas();
                }
            });
        }
    }, [isLoading, mostrarForm]);
    
    const handleClick = () => setLoading(true);

    return(
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
                        {isLoading ? 'Cargando…' : 'Crear persona'}
                        </Button>
                    }
                    {mostrarForm && 
                        <Button 
                            variant="outline-primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                            {isLoading ? 'Cargando…' : 'Ver lista de personas'}
                        </Button>
                    }
                </div>
                {mostrarForm && <FormPersonas onSave={guardarPersona} setPerson={persona}/>}
                {!mostrarForm && <TablaPersonas personas={personas} onDelete={borrarPersona} onView={verPersona}/>}
            </Container>
            <Footer/>
        </>
    )
    
}
export default Personas;