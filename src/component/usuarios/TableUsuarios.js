import React from "react";
import { Table } from "react-bootstrap";

function TableUsuarios(props) {
    const { usuarios, onDelete, onView } = props;
    return (
        <div className="container">
            <Table striped>
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
                    {usuarios?.map((usuarios) => {
                        return (
                            <tr key={usuarios._id}>
                                <td>{usuarios.nombres}</td>
                                <td>{usuarios.apellidos}</td>
                                <td>{usuarios.tipoDoc}</td>
                                <td>{usuarios.numDoc}</td>
                                <td>{usuarios.direccion}</td>
                                <td>{usuarios.telefono}</td>
                                <td>{usuarios.correo}</td>
                                <td>
                                    <button onClick={() => onDelete(usuarios._id)}>Eliminar</button>
                                    <button onClick={() => onView(usuarios)}>Ver</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableUsuarios