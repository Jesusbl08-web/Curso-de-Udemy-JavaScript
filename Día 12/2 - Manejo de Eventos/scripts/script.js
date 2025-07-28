let div_1 = document.getElementById("div_1");
let boton_1 = document.getElementById("boton_1");

let enlace = document.getElementById("enlace_1");

function mostrar_mensaje(event) {
    alert(event.target);
    alert(event.currentTarget);
}

function evitar_enlace(event) {
    event.preventDefault();
    alert("Enlace no habilitado");
}

div_1.addEventListener('click', mostrar_mensaje);

enlace.addEventListener('click', evitar_enlace);
