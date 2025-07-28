function multiplicar() {
    let numero_tabla = Number(document.getElementById("numero_tabla").value);
    let resultado_multiplicacion = document.getElementById("resultado_multiplicacion");

    // Limpiar contenido previo y poner introducción de la tabla de multiplocar
    resultado_multiplicacion.innerHTML = "<br><p>La tabla del " + numero_tabla + " es: <p>";

    // Generar la tabla de multiplicación
    for (let x = 1; x <= 10; x++) {
        resultado_multiplicacion.innerHTML += "<li>" + numero_tabla + " x " + x + " = " + (numero_tabla * x) + "</li>";
    }
}