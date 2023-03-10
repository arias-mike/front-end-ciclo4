let url = 'https://backend-ciclo4.onrender.com/';
url += 'usuarios/';

export async function login(usuario){
    const res = await fetch(url + 'login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}

export async function listarUsuarios(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Usuarios;
}

export async function crearUsuario(usuario){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}

export async function actualizarUsuario(usuario){
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}

export async function eliminarUsuario(id){
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    const data = await res.json();
    return data;
}