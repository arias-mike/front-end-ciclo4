import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Footer from "../generales/Footer";
import Navegador from "../generales/Navegador";

function Transacciones() {
  return (
    <>
      <Navegador/>
      <Container className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column m-5 text-center'>
        <main className="px-3">
          <img src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=300" alt=""/>
          
          <p className="lead">
            ¡Hora de Trabajar!
          </p>
          <Button href="/personas" variant="primary">Iniciar</Button>
        </main>
      </Container>
      <Footer/>
    </>
  )
}

export default Transacciones