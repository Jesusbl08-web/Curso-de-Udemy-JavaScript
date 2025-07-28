let input_1 = document.getElementById("input_1");

function verificar_numero(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    };
};

input_1.addEventListener('keydown', verificar_numero);

input_1.addEventListener('keypress', function(event) {
    console.log("Caracter ingresado: " + event.key);
});

input_1.addEventListener('keyup', function(event) {
    console.log("Entrada del usuario: " + event.target.value)
});