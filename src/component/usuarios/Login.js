import React, { useState } from "react";
import '../../App.css';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { login } from "../../API/UsuariosAPI";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSquare } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import Footer from "../generales/Footer";

function Login() {
    const navegar = useNavigate();
    const [usuario, setUsuario] = useState({
        _id: null,
        usuario: "",
        clave: "",
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
        <>
            <Container fluid className="h-custom">
                <Row className="d-flex justify-content-center align-items-center p-3 my-5">
                    <Col md={9} lg={6} xl={5}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="for sell"/>
                    </Col>
                    <Col md={8} lg="6" xl={{ span: 4, offset: 1 }}>
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Inicia sesión con</p>
                                <Button className="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </Button>

                                <Button className="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Button>

                                <Button className="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </Button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">O</p>
                            </div>
                            <Form.Group className="mb-3 form-outline" controlId="usuario">
                                <Form.Label className="form-label">Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese su usuario"
                                    className="form-control form-control-lg"
                                    name="usuario"
                                    value={usuario.usuario || ""}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label className="form-label">Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    className="form-control form-control-lg"
                                    name="clave"
                                    value={usuario.clave || ""}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Form.Group>

                            <Form.Group className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <Form.Check type="checkbox" label="Recordarme"  />
                                </div>
                                <a href="#!" className="text-body">¿Se te olvidó tu contraseña?</a>
                            </Form.Group>

                            <Form.Group className="text-center text-lg-start mt-4 pt-2">
                                <Button 
                                    className="btn btn-primary btn-lg" 
                                    onClick={enviar} 
                                    style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}
                                >
                                    Iniciar Sesión
                                </Button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    No tengo una cuenta {' '}
                                    <a href="#!" className="link-danger">Registrarme</a>
                                </p>
                            </Form.Group>

                        </form>
                    </Col>
                </Row>
                <Footer/>
            </Container>
        </>
    );
}

export default Login;
