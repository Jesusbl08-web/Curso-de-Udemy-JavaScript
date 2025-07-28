let empleados = [];

function Empleado (numero_empleado, nombre, apellidos, fecha_nacimiento, cargo) {
    this.numero_empleado = numero_empleado;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecha_nacimiento = fecha_nacimiento;
    this.cargo = cargo;
}

function agregar_empleado() {
    let numero_empleado = document.getElementById("numero_empleado").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(numero_empleado, nombre, apellidos, fecha_nacimiento, cargo);

    empleados.push(empleado);

    alert("El empleado ha sido agregado");

    limpiar_campos();
}

function mostrar_empleados() {
    let listado = '';

    for (empleado of empleados) {
        for (let propiedad in empleado) {
            listado += propiedad.toUpperCase() + ": " + empleado[propiedad] + ", ";
        }
        listado += "\n\n";
    }

    alert(listado);
}

function limpiar_campos() {
    document.getElementById("numero_empleado").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("fecha_nacimiento").value = "";
    document.getElementById("cargo").value = "";
}