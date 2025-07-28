function extraer_numero_desde_elemento(elemento) {
    let mi_elemento = document.getElementById(elemento);
    let valor_elemento = mi_elemento.value;
    let numero = Number(valor_elemento);

    return numero;
}

function calcular() {
    let ventas_tienda_1, ventas_tienda_2, ventas_tienda_3, ventas_tienda_4, ventas_tienda_5, ventas_tienda_6;

    ventas_tienda_1 = extraer_numero_desde_elemento("ventas_tienda_1");
    ventas_tienda_2 = extraer_numero_desde_elemento("ventas_tienda_2");
    ventas_tienda_3 = extraer_numero_desde_elemento("ventas_tienda_3");
    ventas_tienda_4 = extraer_numero_desde_elemento("ventas_tienda_4");
    ventas_tienda_5 = extraer_numero_desde_elemento("ventas_tienda_5");
    ventas_tienda_6 = extraer_numero_desde_elemento("ventas_tienda_6");

    let total_ventas = ventas_tienda_1 + ventas_tienda_2 + ventas_tienda_3 + ventas_tienda_4 + ventas_tienda_5 + ventas_tienda_6;

    let mensaje_salida = "Total ventas: " + total_ventas;

    let salida = document.getElementById("salida");

    salida.textContent = mensaje_salida;
}