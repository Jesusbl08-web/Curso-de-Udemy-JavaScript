function consultar_precio_fruta() {
    let texto_precio = document.getElementById("texto_precio");

    let tipo_fruta = document.getElementById("tipo_fruta");
    let fruta = tipo_fruta.value;

    switch(fruta) {
        case "1": texto_precio.textContent = "El precio de la manzana es de 2.5€/kg";
        break;

        case "2": texto_precio.textContent = "El precio de la naranja es de 3.5€/kg";
        break;

        case "3": texto_precio.textContent = "El precio de la pera es de 1.5€/kg";
        break;

        case "4": texto_precio.textContent = "El precio del plátano es de 2.85€/kg";
        break;

        case "5": texto_precio.textContent = "El precio de la sandía es de 0.37€/kg";
        break;
    }
}