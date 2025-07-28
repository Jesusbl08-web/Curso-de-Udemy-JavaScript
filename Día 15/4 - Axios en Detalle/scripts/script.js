/* No va a funcionar porque es un ejemplo de interceptar errores en APIs inventadas

let datos = {
     title: "Nuevo post",
     body: "Mi contenido"
}

let mi_token = "este_es_mi_token";

axios.interceptors.request.use(
    (config) => {
        config.headers.Authorizations = `Bearer $(mi_token)`;
        return config;
    }, (error) => {
        return axios.reject(error);
    }
)

axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = "Nuevo Campo";
        return respuesta;
    }, (error) => {
        return axios.reject(error);
    }
)

let pedido_1 = axios.get("https://api.ejemplo.com/data_1");
let pedido_2 = axios.get("https://api.ejemplo.com/data_2");
let pedido_3 = axios.get("https://api.ejemplo.com/data_3");

axios.all([pedido_1, pedido_2, pedido_3])
.then(axios.spread(([respuesta_1, respuesta_2, respuesta_3]) => {
    // Codigo necesario
}))
.catch(error => {
    // Manejo de errores
})

*/