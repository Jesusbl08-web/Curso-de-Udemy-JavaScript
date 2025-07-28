function crear_tiendas(contenedor_id, min, cantidad_tiendas) {
    // Encontrar contenedor por su id
    let elemento_contenedor = document.getElementById(contenedor_id);

    // Crear tantas tiendas como se pidan
    for (let conteo_tiendas = 1; conteo_tiendas <= cantidad_tiendas; conteo_tiendas++) {
        // Crear el texto de label para poder llamar a la función
        let label = "Tienda " + conteo_tiendas;

        // Crear tiendas con crear_parrafo_tienda()
        let parrafo_tienda = crear_parrafo_tienda(label, min);

        // Agregar el párrafo al contenedor
        elemento_contenedor.appendChild(parrafo_tienda);
    }
}

function crear_parrafo_tienda(label, valor_minimo) {
    // Crear las etiquetas de párrafo
    let elemento_parrafo = document.createElement("p");

    // Crear la etiqueta label
    let elemento_label = document.createElement("label");
    elemento_label.innerText = label + ": ";

    // Conectar el label con el input
    elemento_label.setAttribute("for", label);

    // Crear el input
    let elemento_input = document.createElement("input");
    
    // Establecer atributos de input
    elemento_input.setAttribute("type", "number");
    elemento_input.setAttribute("id", label);
    elemento_input.setAttribute("min", valor_minimo);
    elemento_input.setAttribute("value", 0);

    // Agregar label e input al párrafo
    elemento_parrafo.appendChild(elemento_label);
    elemento_parrafo.appendChild(elemento_input);

    // Devolver el párrafo completo
    return elemento_parrafo;
}

function extraer_numero_desde_elemento(elemento) {
    let valor_elemento = elemento.value;
    let numero = Number(valor_elemento);

    return numero;
}

function calcular() {
    let ventas_tienda = [];

    let posicion_ventas = 0;

    let elementos_ventas = document.getElementById("items_tiendas");

    for (let item of elementos_ventas.children) {
        let valor_venta = extraer_numero_desde_elemento(item.children[1]);
        ventas_tienda[posicion_ventas] = valor_venta;
        posicion_ventas += 1;
    }

    let total_ventas = sumar_total(ventas_tienda);
    let venta_mayor = calcular_mayor(ventas_tienda);
    let venta_menor = calcular_menor(ventas_tienda);
    
    for (let item of elementos_ventas.children) {
        let valor_venta = extraer_numero_desde_elemento(item.children[1]);

        item.children[1].className = "menu_neutro";

        if (valor_venta == venta_mayor) {
            item.children[1].className = "menu_input_mayor";
        }

        if (valor_venta == venta_menor) {
            item.children[1].className = "menu_input_menor";
        }
    }

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