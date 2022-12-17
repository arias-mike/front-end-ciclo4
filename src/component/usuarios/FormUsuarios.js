import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";

function FormUsuarios(props) {
    const { setUser, onSave } = props;
    const [usuario, setUsuario] = useState({
        _id: null,
        usuario: "",
        clave: "",
        rol:"",
        estado: "",
        persona: {
            _id: null,
            nombres: "",
            apellidos: "",
            tipDoc: "-",
            numDoc: "",
            direccion: "",
            telefono: "",
            correo: ""
        }
    });

    useEffect(() => {
        if (setUser) {
            setUsuario(setUser);
        }
    }, [setUser]);

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleChangePersona = (e) => {
        setUsuario({ ...usuario, persona: {[e.target.name]: e.target.value }});
    };

    const guardar = (e) => {
        e.preventDefault();
        onSave(usuario);
    };

    const limpiar = () => {
        setUsuario({
            _id: null,
            nombres: "",
            apellidos: "",
            tipDoc: "-",
            numDoc: "",
            direccion: "",
            telefono: "",
            correo: "",
        });
    };
    return (
        <Container>
            <Form>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label >Nombres</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombres"
                            placeholder="Nombre"
                            value={usuario.nombres || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellidos"
                            placeholder="Apellidos"
                            value={usuario.apellidos || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tipo Documento:</Form.Label>
                        <Form.Select
                            name="tipoDoc"
                            value={usuario.tipoDoc || ''}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="-">Seleccione...</option>
                            <option value="NIT">NIT</option>
                            <option value="CC">Cedula Ciudadania</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Número Documento</Form.Label>
                        <Form.Control
                            type="text"
                            name="numDoc"
                            placeholder="Número Documento"
                            value={usuario.numDoc || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            name="direccion"
                            placeholder="Dirección"
                            value={usuario.direccion || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            type="text"
                            name="telefono"
                            placeholder="Telefono"
                            value={usuario.telefono || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            name="correo"
                            placeholder="name@example.com"
                            value={usuario.correo || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                </fieldset>
            </Form>
            <Button className="btn btn-primary btn-lg" onClick={guardar}>
                Guardar
            </Button>
            <Button className="btn btn-primary btn-lg" onClick={limpiar}>
                Limpiar
            </Button>
        </Container>
    )
}

export default FormUsuarios