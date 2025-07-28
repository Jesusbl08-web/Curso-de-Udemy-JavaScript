let usuario = "Jesus";
let password = "JavaScript";

let token = "mi_token";

//                  Authorization Basic

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    headers: {
        "Authorization": "Basic" + btoa(usuario + ":" + password),
        "Content-Type": "application/json"
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Ha fallado debido a: ", error));


/*                  Authorization Bearer

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "only-if-cached",
    redirect: "manual",
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(respuesta => {
    if (respuesta.type === "opaqueredirect") {
        let nueva_ubi = respuesta.headers.get("Location");
        console.log("Redirigiendo a: ", nueva_ubi);
    } else {
        return respuesta.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error("Ha fallado debido a: ", error));

*/