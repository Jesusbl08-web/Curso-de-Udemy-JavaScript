let boton_1 = document.getElementById("boton_1");

function mostrar_mensaje() {
    alert("El botón ha sido pulsado");
}

boton_1.addEventListener('click', mostrar_mensaje);