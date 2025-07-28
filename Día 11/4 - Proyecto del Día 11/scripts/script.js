function cargar_resumen() {
    fetch("json/resumen.json")
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        document.getElementById("banco").textContent = salida.banco;
        document.getElementById("sucursal").textContent = salida.sucursal;
        
        document.getElementById("titular").textContent = salida.titular;
        document.getElementById("cuenta").textContent = salida.num_cuenta;

        document.getElementById("usd").textContent = salida.saldo[0].valor + " " + salida.saldo[0].moneda;
        document.getElementById("eur").textContent = salida.saldo[1].valor + " " + salida.saldo[1].moneda;

        document.getElementById("cbu").textContent = salida.cbu;
        document.getElementById("abierto").textContent = salida.abierto;
    })
    .catch(function(error) {
        console.log(error);
    })
}