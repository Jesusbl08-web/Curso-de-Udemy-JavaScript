class Animal {
    constructor (nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}

class Perro extends Animal {
    constructor (nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor (nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor (nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.color}`;
    }
}

let perro_1 = new Perro('Firulais', 10, 5, 'Pastor Belga');

let gato_1 = new Gato('Misifú', 3, 7, 'Macho');

let conejo_1 = new Conejo('Bugs Bonney', 2, 3, 'Marrón');

let animales = [perro_1, gato_1, conejo_1];

function mostrar_animales() {
    let lista = document.getElementById("listado_animales");

    lista.innerHTML = '';

    for (let animal of animales) {
        let item = document.createElement('li');
        item.innerHTML = animal.informacion();
        lista.appendChild(item);
    }
}