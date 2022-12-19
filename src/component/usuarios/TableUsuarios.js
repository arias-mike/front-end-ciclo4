import React from "react";
import { Button, Container, Table } from "react-bootstrap";

function TableUsuarios(props) {
    const { usuarios, onDelete, onView } = props;
    return (
        <Container>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios?.map((usuarios) => {
                        return (
                            <tr key={usuarios._id}>
                                <td>{usuarios.usuario}</td>
                                <td>{usuarios.rol}</td>
                                <td>{usuarios.estado}</td>
                                <td>{usuarios.persona.correo}</td>
                                <td>
                                    <Button variant="info" onClick={() => onView(usuarios)}>Ver</Button>{' '}
                                    <Button variant="danger" onClick={() => onDelete(usuarios._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default TableUsuarios