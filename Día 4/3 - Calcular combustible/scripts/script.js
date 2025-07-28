function calcular_litros() {
    var elemento_km = document.getElementById("texto_km");
    var texto_km = elemento_km.value;
    var cantidad_km = Number(texto_km);

    var cantidad_litros = Math.ceil(cantidad_km / 6.5);

    var resultado = document.getElementById("texto_resultado");
    resultado.textContent = "Carga " + cantidad_litros + " litros de combustible";
}