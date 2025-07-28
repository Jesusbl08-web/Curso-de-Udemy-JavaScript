/* Se va a mostrar el mensaje un segundo por pantalla
   pero al no haber servidor real no es funcional */

let socket = new WebSocket('ws://localhost:8080');

let mensaje_ingresado = document.getElementById("mensaje_ingresado");
let boton_enviar = document.getElementById("boton_enviar");

function mostrar_mensajes(contenido) {
    let contenedor_mensajes = document.getElementById("mensaje_chat");
    let elemento_mensaje = document.createElement('p');

    elemento_mensaje.innerText = contenido;
    contenedor_mensajes.appendChild(elemento_mensaje);
};

boton_enviar.onclick = function() {
    let mensaje = mensaje_ingresado.value;
    mostrar_mensajes(mensaje);

    socket.send(mensaje); // Enviar mensaje al servidor
};

socket.onmessage = function(evento) {
    let mensaje = evento.data;
    mostrar_mensajes(mensaje);
}