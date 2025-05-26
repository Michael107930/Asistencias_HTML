function obtenerAsistencias() {
  return JSON.parse(localStorage.getItem("asistencias")) || [];
}

function guardarAsistencias(asistencias) {
  localStorage.setItem("asistencias", JSON.stringify(asistencias));
}

function registrarAsistencia() {
  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const estado = document.getElementById("estado").value;

  if (!codigo || !nombre || !fecha || !estado) {
    alert("Completa todos los campos.");
    return;
  }

  const asistencias = obtenerAsistencias();
  asistencias.push({ codigo, nombre, fecha, estado });
  guardarAsistencias(asistencias);

  alert("Asistencia registrada.");
}

function consultarAsistencias() {
  const codigo = document.getElementById("buscarCodigo").value;
  const lista = document.getElementById("listaAsistencias");
  lista.innerHTML = "";

  const asistencias = obtenerAsistencias().filter(a => a.codigo === codigo);

  if (asistencias.length === 0) {
    lista.innerHTML = "<li>No se encontraron asistencias.</li>";
    return;
  }

  asistencias.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${a.nombre} - ${a.fecha} - ${a.estado}`;
    lista.appendChild(li);
  });
}

function modificarAsistencia() {
  const codigo = document.getElementById("modCodigo").value;
  const nombre = document.getElementById("modNombre").value;
  const fecha = document.getElementById("modFecha").value;
  const nuevoEstado = document.getElementById("nuevoEstado").value;

  let asistencias = obtenerAsistencias();
  let encontrada = false;

  asistencias = asistencias.map(a => {
    if (a.codigo === codigo && a.nombre === nombre && a.fecha === fecha) {
      a.estado = nuevoEstado;
      encontrada = true;
    }
    return a;
  });

  if (!encontrada) {
    alert("Asistencia no encontrada.");
    return;
  }

  guardarAsistencias(asistencias);
  alert("Estado modificado.");
}

