function recomendar(genero) {
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch (genero) {
        case 'drama':
            if (edad < 13) {
                recomendacion.textContent = "Casablanca";
            } else if (edad < 16) {
                recomendacion.textContent = "The Shawshank Redemption";
            } else {
                recomendacion.textContent = "Taxi Driver";
            }
        break;

        case 'comedia':
            if (edad < 13) {
                recomendacion.textContent = "Regreso al Futuro";
            } else if (edad < 16) {
                recomendacion.textContent = "The Truman Show";
            } else {
                recomendacion.textContent = "El lobo de Wall Street";
            }
        break;

        case 'musical':
            if (edad < 13) {
                recomendacion.textContent = "La La Land";
            } else if (edad < 16) {
                recomendacion.textContent = "Les Misérables";
            } else {
                recomendacion.textContent = "The Rocky Horror Picture Show";
            }
        break;

        case 'crimen':
            if (edad < 13) {
                recomendacion.textContent = "No hay funciones disponibles";
            } else if (edad < 16) {
                recomendacion.textContent = "El secreto de sus ojos";
            } else {
                recomendacion.textContent = "The Godfather";
            }
        break;
    }
}