// Variables
let selector = document.getElementById('selector_1');
let input = document.getElementById('input_1');
let boton_buscar = document.getElementById('boton_buscar');
let listado = document.getElementById('listado');

let archivo = 'json/peliculas.json';


// Escuchadores de Eventos
selector.addEventListener('change', cambiar_archivo);
selector.addEventListener('cambiar_eleccion', mensaje_cambio_eleccion);
input.addEventListener('keydown', verificar_input);
boton_buscar.addEventListener('click', buscar);


//Funciones
function cambiar_archivo() {
    archivo = selector.value;
    let evento = new CustomEvent('cambiar_eleccion');
    selector.dispatchEvent(evento);
}

function mensaje_cambio_eleccion() {
    alert("El archivo de búsqueda ahora es " + selector.value);
}

function verificar_input(evento) {
    if((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode != 32 && evento.keyCode != 8) {
        evento.preventDefault();
    }
}

function buscar() {
    listado.innerHTML = "";

    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())) {
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = "none";

                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                li.addEventListener('mouseout', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                li.appendChild(p);
                listado.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        console.log(error);
    })
}