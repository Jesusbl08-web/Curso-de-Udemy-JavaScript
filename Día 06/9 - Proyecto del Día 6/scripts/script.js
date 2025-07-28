let array_notas = [7, 4, 2, 9, 10, 8];

function listado_notas() {
    let listado_notas = document.getElementById("listado_notas");

    for (let nota of array_notas) {
        let item_lista = document.createElement("li");
        item_lista.innerText = nota;
        listado_notas.appendChild(item_lista);
    }
}

function calcular_promedio() {
    let suma = 0;

    for (x = 0; x < array_notas.length; x++) {
        suma += array_notas[x];
    }

    let promedio = (suma / (array_notas.length)).toFixed(2);
    document.getElementById("promedio").textContent = promedio;
}

function nota_mas_alta() {
    let nota_mas_alta = 0;
    let x = 0;

    while (x < array_notas.length) {
        if (array_notas[x] > nota_mas_alta) {
            nota_mas_alta = array_notas[x];
        }
        x++;
    }
    document.getElementById("nota_mas_alta").textContent = nota_mas_alta;
}

function hay_suspenso() {
    let suspenso = "No";
    let x = 0;

    do {
        if (array_notas[x] < 5) {
            suspenso = "Sí";
            break;
        }
        x++;
    } while (x < array_notas.length);
    document.getElementById("suspenso").textContent = suspenso;
}