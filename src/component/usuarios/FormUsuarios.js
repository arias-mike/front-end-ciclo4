import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col  } from "react-bootstrap";

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

    const handleChangePersona= (e) => {
        setUsuario({ ...usuario, persona: {[e.target.name]: e.target.value }});
    };

    const guardar = (e) => {
        e.preventDefault();
        onSave(usuario);
    };

    const limpiar = () => {
        setUsuario({
            _id: null,
            usuario: "",
            clave: "",
            rol:"",
            estado: "",
            persona: {
                _id: null,
                correo: ""
            }
        });
    };
    return (
        <Container>
            <Form>
                <fieldset>
                <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                name="usuario"
                                placeholder="Usuario"
                                value={usuario.usuario || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label >Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="clave"
                                placeholder="Contraseña"
                                value={usuario.clave || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Rol</Form.Label>
                            <Form.Select
                                name="rol"
                                value={usuario.rol || ''}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="-">Seleccione...</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Cajero">Cajero</option>
                                <option value="Vendedor">Vendedor</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Estado</Form.Label>
                            <Form.Select
                                name="estado"
                                value={usuario.estado || ''}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="-">Seleccione...</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                name="correo"
                                placeholder="name@example.com"
                                value={usuario.persona.correo || ''}
                                onChange={(e) => handleChangePersona(e)}
                            />
                        </Form.Group>
                        <Form.Group  as={Col} className="mb-3 mt-3">
                            <Button variant="success" onClick={guardar}>
                                Guardar
                            </Button>{' '}
                            <Button variant="warning" onClick={limpiar}>
                                Limpiar
                            </Button>
                        </Form.Group>
                    </Row>
                </fieldset>
            </Form>
        </Container>
    )
}

export default FormUsuarios