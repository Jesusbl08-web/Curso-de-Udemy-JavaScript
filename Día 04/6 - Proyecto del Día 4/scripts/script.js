function mostrar_resultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

function suma() {
    let numero_1 = +document.getElementById("campo_1").value;
    let numero_2 = +document.getElementById("campo_2").value;
    mostrar_resultado(numero_1 + numero_2)
}

function resta() {
    let numero_1 = +document.getElementById("campo_1").value;
    let numero_2 = +document.getElementById("campo_2").value;
    mostrar_resultado(numero_1 - numero_2)
}

function multiplicacion() {
    let numero_1 = +document.getElementById("campo_1").value;
    let numero_2 = +document.getElementById("campo_2").value;
    mostrar_resultado(numero_1 * numero_2)
}

function division() {
    let numero_1 = +document.getElementById("campo_1").value;
    let numero_2 = +document.getElementById("campo_2").value;
    mostrar_resultado(numero_1 / numero_2)
}

function raiz() {
    let numero = +document.getElementById("campo_2").value;
    mostrar_resultado(Math.sqrt(numero));
}

function potencia() {
    let numero_1 = +document.getElementById("campo_1").value;
    let numero_2 = +document.getElementById("campo_2").value;
    mostrar_resultado(Math.pow(numero_1, numero_2));
}

function absoluto() {
    let numero = +document.getElementById("campo_2").value;
    mostrar_resultado(Math.abs(numero));
}

function aleatorio() {
    let minimo = +document.getElementById("campo_1").value;
    let maximo = +document.getElementById("campo_2").value;
    maximo = maximo + 1;
    mostrar_resultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function redondeo() {
    let resultado = +document.getElementById("resultado").value;
    mostrar_resultado(Math.round(resultado));
}

function techo() {
    let resultado = +document.getElementById("resultado").value;
    mostrar_resultado(Math.ceil(resultado));
}

function piso() {
    let resultado = +document.getElementById("resultado").value;
    mostrar_resultado(Math.floor(resultado));
}