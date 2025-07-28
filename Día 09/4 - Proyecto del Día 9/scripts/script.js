function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular
}

let automovil_1 = new Automovil('Ford', 'Focus', 'Negro', 2015, 'Francisco Barriga');
let automovil_2 = new Automovil('Citroën', 'Xsara', 'Azul cielo', 2005, 'Álvaro Cruz');
let automovil_3 = new Automovil('Peugeot', '206', 'Azul', 2003, 'Aritz Ávila');
let automoviles = [automovil_1, automovil_2, automovil_3];

Automovil.prototype.venderAutomovil = function(nuevo_titular) {
    this.titular = nuevo_titular;
}

Automovil.prototype.encender = function() {
    alert("El automóvil fue encendido");
}

Automovil.prototype.ver_automovil = function() {
    return `${this.marca} ${this.modelo} (${this.color}) - ${this.anio} - ${this.titular}`
}

function mostrar_automoviles() {
    let lista = document.getElementById('listado_automoviles');

    lista.innerHTML = '';

    for(let automovil of automoviles) {
        let item = document.createElement('li');
        item.innerText = automovil.ver_automovil();
        lista.appendChild(item);
    }
}