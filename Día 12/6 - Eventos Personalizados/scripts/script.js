let audio = document.getElementById("audio");
let listado_canciones = document.getElementById("listado_canciones");

listado_canciones.addEventListener('change', cambiar_cancion);

function cambiar_cancion() {
    let cancion_elegida = listado_canciones.value;

    audio.src = cancion_elegida;
    audio.play();

    let evento = new CustomEvent('cambio_de_cancion');
    audio.dispatchEvent(evento);
}

function mostrar_cancion() {
   console.log("La canción actual es: " + listado_canciones.value);
}

audio.addEventListener('cambio_de_cancion', mostrar_cancion);