import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";

function FormPersonas(props) {
    const { setPerson, onSave } = props;
    const [persona, setPersona] = useState({
        _id: null,
        nombres: "",
        apellidos: "",
        tipoDoc: "",
        numDoc: "",
        direccion: "",
        telefono: "",
        correo: "",
    });

    useEffect(() => {
        if (setPerson) {
            setPersona(setPerson);
        }
    }, [setPerson]);

    const handleChange = (e) => {
        setPersona({ ...persona, [e.target.name]: e.target.value });
    };

    const guardar = (e) => {
        e.preventDefault();
        onSave(persona);
    };

    const limpiar = () => {
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
                            value={persona.nombres || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellidos"
                            placeholder="Apellidos"
                            value={persona.apellidos || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tipo Documento:</Form.Label>
                        <Form.Select
                            name="tipoDoc"
                            value={persona.tipoDoc || ''}
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
                            value={persona.numDoc || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            name="direccion"
                            placeholder="Dirección"
                            value={persona.direccion || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            type="text"
                            name="telefono"
                            placeholder="Telefono"
                            value={persona.telefono || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            name="correo"
                            placeholder="name@example.com"
                            value={persona.correo || ''}
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
    );
}

export default FormPersonas;
