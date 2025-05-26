class FacultadController {
    constructor() {
    }

    consultar(req, res) {
        try {
            let arreglo = [];
            let myObj = { id: "1", nombre: "Recursos Humanos", descripcion: "Gestiona el personal" };
            let myObj2 = { id: "2", nombre: "Finanzas", descripcion: "Gestiona los recursos financieros" };

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
            const { id, nombre, descripcion } = req.body;
            console.log("ID del departamento: " + id);
            console.log("Nombre del departamento: " + nombre);
            console.log("Descripción: " + descripcion);
            res.status(200).send("Departamento ingresado correctamente");
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new FacultadController();