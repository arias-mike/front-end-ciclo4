import React from "react";
import { Button, Container, Table } from "react-bootstrap";

function TablaPersonas(props) {
    const { personas, onDelete, onView } = props;
    return (
        <Container>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Tipo de Documento</th>
                        <th>Numero de Documento</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personas?.map((personas) => {
                        return (
                            <tr key={personas._id}>
                                <td>{personas.nombres}</td>
                                <td>{personas.apellidos}</td>
                                <td>{personas.tipoDoc}</td>
                                <td>{personas.numDoc}</td>
                                <td>{personas.direccion}</td>
                                <td>{personas.telefono}</td>
                                <td>{personas.correo}</td>
                                <td>
                                    <Button variant="info" onClick={() => onView(personas)}>Ver</Button>{' '}
                                    <Button variant="danger" onClick={() => onDelete(personas._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default TablaPersonas