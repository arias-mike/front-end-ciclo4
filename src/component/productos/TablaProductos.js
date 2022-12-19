import React from "react";
import { Button, Container, Table } from "react-bootstrap";

function TablaProductos(props) {
    const { productos, onDelete, onView } = props;
    return (
        <Container>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Unidad</th>
                        <th>Cantidad</th>
                        <th>Precio Venta</th>
                        <th>Precio Compra</th>
                        <th>Stock Minimo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos?.map((productos) => {
                        return (
                            <tr key={productos._id}>
                                <td>{productos.codigo}</td>
                                <td>{productos.nombre}</td>
                                <td>{productos.descripcion}</td>
                                <td>{productos.unidadMedida}</td>
                                <td>{productos.cantidad}</td>
                                <td>{productos.precioVenta}</td>
                                <td>{productos.precioCompra}</td>
                                <td>{productos.stockMinimo}</td>
                                <td>
                                    <Button variant="info" onClick={() => onView(productos)}>Ver</Button>{' '}
                                    <Button variant="danger" onClick={() => onDelete(productos._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default TablaProductos