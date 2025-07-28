let boton_1 = document.getElementById("boton_1");
let lista_1 = document.getElementById("lista_1");

boton_1.addEventListener('mouseover', function() {
    lista_1.style.display = 'block';
});

boton_1.addEventListener('mouseout', function() {
    lista_1.style.display = 'none';
});

document.addEventListener('mousemove', function(event) {
    console.log("Posición X: " + event.clientX + " - Posición Y: " + event.clientY)
});