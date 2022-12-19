import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function FormProductos(props) {
    const { setProduct, onSave } = props;
    const [producto, setProducto] = useState({
        _id: null,
        nombres: "",
        codigo: "",
        cantidad: "",
        precioVenta: "",
        precioCompra: "",
        stockMinimo: "",
        descripcion: "",
        unidadMedida: ""
    });

    useEffect(() => {
        if (setProduct) {
            setProducto(setProduct);
        }
    }, [setProduct]);

    const handleChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    };

    const guardar = (e) => {
        e.preventDefault();
        onSave(producto);
    };

    const limpiar = () => {
        setProducto({
            _id: null,
            nombres: "",
            codigo: "",
            cantidad: "",
            precioVenta: "",
            precioCompra: "",
            stockMinimo: "",
            descripcion: "",
            unidadMedida: ""
        });
    };

    return (
        <Container>
            <Form>
                <fieldset>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Código</Form.Label>
                            <Form.Control
                                type="text"
                                name="codigo"
                                placeholder="Código"
                                value={producto.codigo || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={producto.nombre || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="descripcion"
                                placeholder="Descripción"
                                value={producto.descripcion || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Unidad</Form.Label>
                            <Form.Select
                                name="unidadMedida"
                                value={producto.unidadMedida || ''}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="-">Seleccione...</option>
                                <option value="Litros">Litros</option>
                                <option value="Caja">Caja</option>
                                <option value="Metro">Metro</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                type="number"
                                name="cantidad"
                                placeholder="Cantidad"
                                value={producto.cantidad || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Precio Venta</Form.Label>
                            <Form.Control
                                type="number"
                                name="precioVenta"
                                placeholder="Precio Venta"
                                value={producto.precioVenta || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Precio Compra</Form.Label>
                            <Form.Control
                                type="number"
                                name="precioCompra"
                                placeholder="Precio Compra"
                                value={producto.precioCompra || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Stock Minimo</Form.Label>
                            <Form.Control
                                type="number"
                                name="stockMinimo"
                                placeholder="Stock Minimo"
                                value={producto.stockMinimo || ''}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
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

export default FormProductos