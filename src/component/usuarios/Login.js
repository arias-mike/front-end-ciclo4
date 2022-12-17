import React, { useState } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";
import { login } from "../../API/UsuariosAPI";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Login() {
    const navegar = useNavigate();
    const [usuario, setUsuario] = useState({
        _id: null,
        usuario: "",
        clave: "",
/*         rol:"",
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
        } */
    });

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const guardar = (usuario) => {
        console.log(usuario)
        login(usuario)
            .then((data) => {
                console.log(data)
                if (data  != null) {
                    localStorage.setItem("usuarioActivo", JSON.stringify(data))
                    navegar("/");
                }else{
                    swal({
                        title: "Error",
                        text: "Usuario o Contraseña incorrecta, por favor verificar...",
                        icon: "error"
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const enviar = (e) => {
        e.preventDefault();
        guardar(usuario);
    };

    return (
        <Container className="w-25 p-3 vh-50">
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="usuario">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su usuario"
                            name="usuario"
                            value={usuario.usuario || ""}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="clave"
                            value={usuario.clave || ""}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordar" />
                    </Form.Group>
                    <Button variant="primary" onClick={enviar}>
                        Iniciar
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default Login;
