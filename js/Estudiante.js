const baseURL = "https://ejemplodedsws.netlify.app/.netlify/functions/estudiantes";

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll("section");
    secciones.forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function registrarEstudiante() {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const dni = document.getElementById("dni").value;
    const correo = document.getElementById("correo").value;

    if (!nombre || !apellidos || !dni || !correo) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "dni": dni,
        "nombre": nombre,
        "apellidos": apellidos, 
        "email": correo
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("URL", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Estudiante registrado exitosamente.");
        })
        .catch(error => console.error('Error al registrar:', error));
}

function consultarEstudiante() {
    event.preventDefault();

    fetch(baseURL, { method: "GET", redirect: "follow" })
        .then(response => response.text())
        .then(result => {
            cargarConsulta(result);
        })
        .catch(error => console.error('Error al consultar:', error));
}

function modificarEstudiante() {
    event.preventDefault();

    const dni = document.getElementById("dniM").value;
    const nuevoNombre = document.getElementById("nombreM").value;
    const nuevosApellidos = document.getElementById("apellidosM").value;
    const nuevoCorreo = document.getElementById("correoM").value;

    if (!dni || !nuevoNombre || !nuevosApellidos || !nuevoCorreo) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "dni": dni,
        "nombre": nuevoNombre,
        "apellidos": nuevosApellidos,
        "email": nuevoCorreo
    });

    const requestOptions = {
        method: "PUT", 
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${baseURL}/${dni}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Estudiante modificado exitosamente.");
        })
        .catch(error => console.error('Error al modificar:', error));
}

function eliminarEstudiante() {
    event.preventDefault();

    const dni = document.getElementById("dniE").value;

    if (!dni) {
        alert("Por favor, ingresa el DNI del estudiante a eliminar.");
        return;
    }

    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    fetch(`${baseURL}/${dni}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Estudiante eliminado exitosamente.");
        })
        .catch(error => console.error('Error al eliminar:', error));
}

function cargarConsulta(resultado) {
    let transformado = JSON.parse(resultado);
    let salida = "";
    let elemento = "";

    for (let vc in transformado) {
        elemento = `<br>DI: ${transformado[vc].dni}`;
        elemento += `<br>Nombres y apellidos: ${transformado[vc].nombre} ${transformado[vc].apellidos}`;
        elemento += `<br>Correo electrónico: ${transformado[vc].email}`;
        salida += elemento + "<br><br>";
    }

    document.getElementById("rta").innerHTML = salida;
}
