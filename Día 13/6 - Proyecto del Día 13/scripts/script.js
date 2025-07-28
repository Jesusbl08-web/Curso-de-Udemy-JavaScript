function cargar_contenido() {
    cargar_cotizaciones(mostrar_cotizaciones);
    cargar_elementos(); 
    cargar_textos();
}

async function cargar_cotizaciones(callback) {
    await delay(2000);

    // 1. Precio del Bitcoin
    let promesa_1 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp');
    let datos_1 = await promesa_1.json();
    callback({
        bitcoin: {
            USD: { rate_float: datos_1.bitcoin.usd },
            EUR: { rate_float: datos_1.bitcoin.eur },
            GBP: { rate_float: datos_1.bitcoin.gbp }
        }
    });

    // 2. EUR → USD
    try {
        let promesa_2 = await fetch('https://open.er-api.com/v6/latest/EUR');
        let datos_2 = await promesa_2.json();
        document.getElementById('euros_a_dolares').append(datos_2.rates.USD.toFixed(4) + " $");
    } catch (error) {
        console.error("Error obteniendo EUR → USD:", error);
    }

    // 3. GBP → USD
    try {
        let datos_3 = await crear_pedido('https://open.er-api.com/v6/latest/GBP');
        document.getElementById('libras_a_dolares').append(datos_3.rates.USD.toFixed(4) + " $");
    } catch (error) {
        console.error("Error obteniendo GBP → USD:", error);
    }

    document.getElementById('imagen_espera').style.visibility = 'hidden';
}

function mostrar_cotizaciones(datos) {
    document.getElementById('bitcoin_a_dolares').append(datos.bitcoin.USD.rate_float.toFixed(2) + " $");
}

async function crear_pedido(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send();
    });
}

function cargar_elementos() {
    document.getElementById('imagen_logo').setAttribute('src', 'multimedia/logo.jpg');
    document.getElementById('titulo').textContent = "Cotizaciones Online";
    document.getElementById('imagen_espera').setAttribute('src', 'multimedia/loading.gif');
    document.getElementById('imagen_espera').style.visibility = 'visible';
}

function cargar_textos() {
    document.getElementById('euros_a_dolares').append("EUR a USD: ");
    document.getElementById('libras_a_dolares').append("GBP a USD: ");
    document.getElementById('bitcoin_a_dolares').append("Bitcoin a USD: ");
}

function delay(ms) {
    return new Promise(function(res) {
        setTimeout(res, ms);
    });
}