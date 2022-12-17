import React from "react";
import { Table } from "react-bootstrap";

function TablaPersonas(props) {
    const { personas, onDelete, onView } = props;
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
                                    <button onClick={() => onDelete(personas._id)}>Eliminar</button>
                                    <button onClick={() => onView(personas)}>Ver</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default TablaPersonas