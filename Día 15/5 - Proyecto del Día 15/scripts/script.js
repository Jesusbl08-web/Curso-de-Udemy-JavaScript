async function obtener_productos() {
    try {
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            let cuerpo_tabla = document.getElementById("contenido_tabla");
            let salida = "";
            for(let elemento of data.dispositivos){
                salida += `
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.marca}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento}</td>
                        <td>${elemento.procesador}</td>
                    </tr>
                `;
            } 
            cuerpo_tabla.innerHTML = salida;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function consultar_producto() {
    try {
        let id = document.getElementById('texto_consulta').value;

        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }

        axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id)
        .then(respuesta => {
            let dispositivo = respuesta.data;
            document.getElementById('consultar_nombre').value = dispositivo.marca;
            document.getElementById('consultar_modelo').value = dispositivo.modelo;
            document.getElementById('consultar_color').value = dispositivo.color;
            document.getElementById('consultar_almacenamiento').value = dispositivo.almacenamiento;
            document.getElementById('consultar_procesador').value = dispositivo.procesador;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function agregar_producto() {
    try {
        let marca = document.getElementById("input_marca").value;
        let modelo = document.getElementById("input_modelo").value;
        let color = document.getElementById("input_color").value;
        let almacenamiento = document.getElementById("input_almacenamiento").value;
        let procesador = document.getElementById("input_procesador").value;

        // Nota: La API proporcionada (my-json-server) no permite la creación real de nuevos registros
        // en el repositorio de GitHub. Solo simula las operaciones POST.
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => {    
            //Llama a la función obtener_productos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtener_productos();
            alert(`Se ha agregado un nuevo archivo:\nMarca: ${data.marca}\nModelo: ${data.modelo}\nColor: ${data.color}\nAlmacenamiento: ${data.almacenamiento}\nProcesador: ${data.procesador}`);
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function modificar_producto() {        
    try {
        let id = document.getElementById('texto_consulta').value;
        let nombre = document.getElementById('consultar_nombre').value;
        let modelo = document.getElementById('consultar_modelo').value;
        let color = document.getElementById('consultar_color').value;
        let almacenamiento = document.getElementById('consultar_almacenamiento').value;
        let procesador = document.getElementById('consultar_procesador').value;
        
        if (nombre === '') {
            alert('El registro a modificar no está completo');
            return;
        }

        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                data: {
                    modelo: modelo,
                    color: color,
                    almacenamiento: almacenamiento,
                    procesador: procesador
                }
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => {
             alert(`Se ha modificado el archivo ${id}. Nuevo contenido:\n${JSON.stringify(data)}`);
            //Llama a la función obtener_productos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtener_productos();
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function eliminar_producto() {
    try {
        let id = document.getElementById('texto_consulta').value;

        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }

        axios.delete('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id)
        .then(respuesta => {
            alert(`Se ha eliminado el archivo ${id}.`);
            document.getElementById('consultar_nombre').value = "";
            document.getElementById('consultar_modelo').value = "";
            document.getElementById('consultar_color').value = "";
            document.getElementById('consulta_almacenamiento').value = "";
            document.getElementById('consultar_procesador').value = "";

            //Llama a la función obtener_productos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtener_productos();
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}