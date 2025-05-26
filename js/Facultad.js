let facultad = "Ingenieria de Sistemas y Computación";

function consultarFacultad() {
    if (facultad === "") {
        mostrarResultado("No hay ninguna facultad registrada.");
    } else {
        mostrarResultado(`Facultad actual: <strong>${facultad}</strong>`);
    }
}

function modificarFacultad() {
    const nuevoNombre = document.getElementById("nombreFacultad").value;
    if (nuevoNombre.trim() === "") return alert("Por favor, ingresa un nombre válido para modificar.");
    facultad = nuevoNombre;
    mostrarResultado(`Facultad modificada. Nuevo nombre: <strong>${facultad}</strong>`);
}

function mostrarResultado(mensaje) {
    event.preventDefault();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.style.display = "block";
}
