const url = "http://localhost:4000/clientes";

//Funcion para agregar un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(cliente), // La data puede ser un string o objeto
            headers:{
              'Content-Type': 'application/json' // Le decimos como se enviara la informacion
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Funcion para obtener los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Funcion para obtener un cliente en especifico segun su id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Funcion para eliminar un cliente

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', 
            body: JSON.stringify(cliente), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}