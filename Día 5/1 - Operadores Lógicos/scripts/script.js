function calcular() {
    let respuesta_1 = document.getElementById("respuesta_1");
    let respuesta_2 = document.getElementById("respuesta_2");
    let respuesta_3 = document.getElementById("respuesta_3");

    let texto_edad = document.getElementById("texto_edad");
    let edad = texto_edad.value;

    let puede_beber = edad >= 18;
    respuesta_1.textContent = puede_beber;

    let puede_ir_a_la_discoteca = edad >= 18 && edad <= 30;
    respuesta_2.textContent = puede_ir_a_la_discoteca;

    let puede_entrar_gratis_casino = edad == 20 || edad == 25;
    respuesta_3.textContent = puede_entrar_gratis_casino;

}