function evaluar_compra() {
    let decision = document.getElementById("decision");

    let texto_precio = document.getElementById("texto_precio");
    let precio = texto_precio.value;

    if (precio < 5) {
        decision.textContent = "Puedes comprar dos cartones de leche";
    } else if (precio < 8) {
        decision.textContent = "Puedes comprar sólo un cartón de leche";
    } else {
        decision.textContent = "Está muy cara, mejor no comprarla";
    }
}