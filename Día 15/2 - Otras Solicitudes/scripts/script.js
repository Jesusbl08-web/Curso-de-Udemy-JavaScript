//                     Método PUT

fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nuevo título",
        body: "Nueva descripción"
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Ha fallado debido a: ", error));


/*                   Método DELETE

fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "DELETE"
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Ha fallado debido a: ", error));

*/

/*                     Método PATCH

fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nuevo título"
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Ha fallado debido a: ", error));

*/