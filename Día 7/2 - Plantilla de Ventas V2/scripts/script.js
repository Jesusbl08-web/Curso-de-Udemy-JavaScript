function extraer_numero_desde_elemento(elemento) {
    let mi_elemento = document.getElementById(elemento);
    let valor_elemento = mi_elemento.value;
    let numero = Number(valor_elemento);

    return numero;
}

function calcular() {
    let ventas_tienda = [];

    ventas_tienda[0] = extraer_numero_desde_elemento("ventas_tienda_1");
    ventas_tienda[1] = extraer_numero_desde_elemento("ventas_tienda_2");
    ventas_tienda[2] = extraer_numero_desde_elemento("ventas_tienda_3");
    ventas_tienda[3] = extraer_numero_desde_elemento("ventas_tienda_4");
    ventas_tienda[4] = extraer_numero_desde_elemento("ventas_tienda_5");
    ventas_tienda[5] = extraer_numero_desde_elemento("ventas_tienda_6");

    let total_ventas = sumar_total(ventas_tienda);

    let venta_mayor = calcular_mayor(ventas_tienda);
    let venta_menor = calcular_menor(ventas_tienda);

    let mensaje_salida = "Total ventas: " + total_ventas + " / " +
                        "Venta mayor: " + venta_mayor + " / " +
                        "Venta menor: " + venta_menor;

    let salida = document.getElementById("salida");

    salida.textContent = mensaje_salida;
}

function sumar_total(array_ventas) {
    let total = 0;
    for (let venta of array_ventas) {
        total += venta;
    }

    return total;
}

function calcular_mayor(array_mayor) {
    let maximo = array_mayor[0];

    for (let venta of array_mayor) {
        if (venta > maximo) {
            maximo = venta;
        }
    }

    return maximo;
}

function calcular_menor(array_menor) {
    let minimo = array_menor[0];

    for (let venta of array_menor) {
        if (venta < minimo) {
            minimo = venta;
        }
    }

    return minimo;
}