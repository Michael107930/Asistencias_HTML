const baseURLAsignaturas = "https://sistemasgestionasistenciasudec.netlify.app/.netlify/functions/asignaturas"; 
const baseURLEstudiantes = "https://sistemasgestionasistenciasudec.netlify.app/.netlify/functions/estudiantes";

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll("section");
    secciones.forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function registrarAsignatura() {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value;
    const grupo = document.getElementById("grupo").value;
    const semestre = document.getElementById("semestre").value;
    const nombre = document.getElementById("nombreA").value;
    const creditos = document.getElementById("creditos").value;

    if (!codigo || !grupo || !semestre || !nombre || !creditos) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "codigo": codigo,
        "grupo": grupo,
        "semestre": semestre,
        "nombre": nombre,
        "creditos": creditos
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(baseURLAsignaturas, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Asignatura registrada exitosamente.");
        })
        .catch(error => console.error('Error al registrar asignatura:', error));
}

function consultarAsignatura() {
    event.preventDefault();

    fetch(baseURLAsignaturas, { method: "GET", redirect: "follow" })
        .then(response => response.text())
        .then(result => cargarAsignaturas(result))
        .catch(error => console.error('Error al consultar asignaturas:', error));
}

function modificarAsignatura() {
    event.preventDefault();

    const codigo = document.getElementById("codigoM").value;
    const grupo = document.getElementById("grupoM").value;
    const semestre = document.getElementById("semestreM").value;
    const nombreNuevo = document.getElementById("nombreNuevo").value;
    const creditosNuevo = document.getElementById("creditosNuevo").value;

    if (!codigo || !grupo || !semestre || !nombreNuevo || !creditosNuevo) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "codigo": codigo,
        "grupo": grupo,
        "semestre": semestre,
        "nombre": nombreNuevo,
        "creditos": creditosNuevo
    });

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${baseURLAsignaturas}/${codigo}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Asignatura modificada exitosamente.");
        })
        .catch(error => console.error('Error al modificar asignatura:', error));
}

function eliminarAsignatura() {
    event.preventDefault();

    const codigo = document.getElementById("codigoE").value;

    if (!codigo) {
        alert("Por favor, ingresa el código de la asignatura.");
        return;
    }

    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    fetch(`${baseURLAsignaturas}/${codigo}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Asignatura eliminada exitosamente.");
        })
        .catch(error => console.error('Error al eliminar asignatura:', error));
}

function cargarAsignaturas(resultado) {
    let transformado = JSON.parse(resultado);
    let salida = "";

    for (let vc in transformado) {
        let elemento = `<br>Código: ${transformado[vc].codigo}`;
        elemento += `<br>Nombre: ${transformado[vc].nombre}`;
        elemento += `<br>Grupo: ${transformado[vc].grupo}`;
        elemento += `<br>Semestre: ${transformado[vc].semestre}`;
        elemento += `<br>Créditos: ${transformado[vc].creditos}`;
        salida += elemento + "<br><br>";
    }

    document.getElementById("rtaAsignaturas").innerHTML = salida;
}

function registrarEstudiante() {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipoi = document.getElementById("tipoi").value;
    const numeroi = document.getElementById("numeroi").value;

    if (!nombre || !tipoi || !numeroi) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "nombre": nombre,
        "tipoi": tipoi,
        "numeroi": numeroi
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(baseURLEstudiantes, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Estudiante registrado exitosamente.");
            listarEstudiantes(); // refrescar
        })
        .catch(error => console.error('Error al registrar estudiante:', error));
}

function listarEstudiantes() {
    fetch(baseURLEstudiantes, { method: "GET", redirect: "follow" })
        .then(response => response.text())  
        .then(result => cargarEstudiantes(result))
        .catch(error => console.error('Error al consultar estudiantes:', error));
}

function cargarEstudiantes(resultado) {
    let transformado = JSON.parse(resultado);
    const lista = document.getElementById("listaEstudiantes");
    lista.innerHTML = "";

    transformado.forEach(e => {
        const li = document.createElement("li");
        li.textContent = `${e.nombre} - ${e.tipoi} - ${e.numeroi}`;
        lista.appendChild(li);
    });
}
