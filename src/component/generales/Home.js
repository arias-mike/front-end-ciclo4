import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Footer from './Footer'
import Navegador from './Navegador'

function Home() {
  return (
    <>
      <Navegador/>
      <Container className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column m-5 text-center'>
        <main className="px-3">
          <h1>Bienvenidos a la Papelería - La Escuadra</h1>
          <p className="lead">Plataforma para gestionar las compras y ventas de la papelería La Escuadra, 
            este sistema de información esta especializado en gestionar las compras y ventas, registrando, consultando, 
            actualizando y eliminando los mismos en diferentes roles como administrador, cajero y vendedor. 
            La principal razón del sistema, es poder aportar un manejo mucho más rápido y 
            sencillo al momento de gestionar a los clientes para la creación de las nuevas ventas que se realicen. Adicionalmente, 
            el sistema cuenta con la gestión de los proveedores para las nuevas compras, tambien con la administración de los 
            nuevos productos y la gestión del stock de los mismos. Hay formularios personalizados para agilizar 
            el proceso de inserción de la informacion y cuenta con secciones de reportes para el caso que se aplique.  </p>
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

export default Home