class AsistenciasController {
    constructor() {}

    consultar(req, res) {
        try {
            let arreglo = [];
            let myObj = { id: "1", fecha: "2023-10-01", estudiante: "Juan Perez", estado: "Presente" };
            let myObj2 = { id: "2", fecha: "2023-10-02", estudiante: "Maria Lopez", estado: "Ausente" };

            arreglo.push(myObj);
            arreglo.push(myObj2);

            let myJSON = JSON.stringify(arreglo);

            res.status(200).send(myJSON);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try {
            const { id, fecha, estudiante, estado } = req.body;
            console.log("ID de asistencia: " + id);
            console.log("Fecha: " + fecha);
            console.log("Estudiante: " + estudiante);
            console.log("Estado: " + estado);
            res.status(200).send("Asistencia registrada correctamente");
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new AsistenciasController();