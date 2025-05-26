class AsignaturaController {
    constructor() {}

    consultar(req, res) {
        try {
            let asignaturas = [];
            let asignatura1 = { codigo: "MAT101", nombre: "Matemáticas", creditos: 4 };
            let asignatura2 = { codigo: "FIS102", nombre: "Física", creditos: 3 };

            asignaturas.push(asignatura1);
            asignaturas.push(asignatura2);

            let responseJSON = JSON.stringify(asignaturas);

            res.status(200).send(responseJSON);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try {
            const { codigo, nombre, creditos } = req.body;
            console.log("Código de la asignatura: " + codigo);
            console.log("Nombre de la asignatura: " + nombre);
            console.log("Créditos: " + creditos);
            res.status(200).send("Asignatura ingresada correctamente");
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new AsignaturaController();