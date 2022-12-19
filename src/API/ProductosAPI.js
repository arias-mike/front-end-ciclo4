let url = 'https://backend-ciclo4.onrender.com/';
url += 'productos/';

export async function listarProductos(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Productos;
}

export async function crearProducto(producto){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(producto)
    });
    const data = await res.json();
    return data;
}

export async function actualizarProducto(producto){
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(producto)
    });
    const data = await res.json();
    return data;
}

export async function eliminarProducto(id){
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    const data = await res.json();
    return data;
}