import React, { useEffect, useState } from "react";
import { actualizarProducto, crearProducto, eliminarProducto, listarProductos } from "../../API/ProductosAPI";
import Navegador from "../generales/Navegador";
import FormProductos from "./FormProductos";
import TablaProductos from "./TablaProductos";
import { Button, Container } from "react-bootstrap";
import Footer from "../generales/Footer";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Productos() {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const actualizarLista = () =>{
        listarProductos()
            .then((data)=>{setProductos(data)})
            .catch((error)=>{console.log(error)})
    }

    if (productos.length === 0) {
        actualizarLista();
    }

    const guardarProducto = (producto) =>{
        
        if (producto._id === null) {
            crearProducto(producto)
                .then((data)=>{
                    actualizarLista();
                })
                .catch((error)=>{console.log(error)})
        }else{
            console.log(producto)
            actualizarProducto(producto)
                .then((data)=>{
                    actualizarLista();
                })
                .catch((error)=>{console.log(error)})
        }
        setMostrarForm(false);
    }

    const borrarProducto = (id) =>{
        eliminarProducto(id)
            .then((data)=>{
                actualizarLista();
            })
            .catch((error)=>{console.log(error)})
    }
    
    const verProducto = (producto) =>{
        setProducto(producto);
        setMostrarForm(true);
    }

    const verListaProductos = () =>{
        setProducto({
            _id: null,
            nombres: "",
            codigo: "",
            cantidad: "",
            precioVenta: "",
            precioCompra: "",
            stockMinimo: "",
            descripcion: "",
            unidadMedida: ""
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
                    verListaProductos();
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
                        {isLoading ? 'Cargando…' : 'Crear producto'}
                        </Button>
                    }
                    {mostrarForm && 
                        <Button 
                            variant="outline-primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                            {isLoading ? 'Cargando…' : 'Ver lista de productos'}
                        </Button>
                    }
                </div>
                {mostrarForm && <FormProductos onSave={guardarProducto} setProduct={producto}/>}
                {!mostrarForm && <TablaProductos productos={productos} onDelete={borrarProducto} onView={verProducto}/>}
            </Container>
            <Footer/>
        </>
    )
}

export default Productos