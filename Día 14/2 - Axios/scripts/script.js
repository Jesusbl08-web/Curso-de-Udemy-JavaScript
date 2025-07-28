function obtener_info() {
    axios.get("https://openlibrary.org/search.json?q=javascript")
    .then(function(respuesta) {
        let lista_informacion = document.getElementById("lista_informacion");
        lista_informacion.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

        let libros = respuesta.data.docs;

        for (let x = 0; x < libros.length; x++) {
            let item_lista = document.createElement("li");
            let titulo = libros[x].title || "Título no disponible";
            let autor = libros[x].author_name ? libros[x].author_name.join(", ") : "Autor desconocido";
            let año = libros[x].first_publish_year || "Año desconocido";

            item_lista.innerText = `"${titulo}" por ${autor} (${año})`;
            lista_informacion.appendChild(item_lista);
        }
    })
    .catch(function(error) {
      console.error("Error al obtener información:", error);
    });
}