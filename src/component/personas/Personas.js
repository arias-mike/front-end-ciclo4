import React, { useState } from "react";
import { actualizarPersona, crearPersona, eliminarPersona, listarPersonas } from "../../API/PersonasAPI";
import Navegador from "../generales/Navegador";
import FormPersonas from "./FormPersonas";
import TablaPersonas from "./TablaPersonas";
//import { useParams } from "react-router";

function Personas(){
    const [mostrarForm, setMostrarForm] = useState(false);
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null);
    //let {view} = useParams();

    /* if (view === 'tabla'){
        mostrarForm=false;
    }else{
        mostrarForm=true;
    } */

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
        //setTimeout( function() { window.location.href = "../personas/formulario"; }, 2000 );
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

    return(
        <>
            <Navegador/>
            <div>
                {!mostrarForm && <button onClick={verListaPersonas}>Crear persona</button>}
                {mostrarForm && <button onClick={() => setMostrarForm(false)}>Ver lista de personas</button>}
            </div>
            {mostrarForm && <FormPersonas onSave={guardarPersona} setPerson={persona}/>}
            {!mostrarForm && <TablaPersonas personas={personas} onDelete={borrarPersona} onView={verPersona}/>}
        </>
    )
    
}
export default Personas;