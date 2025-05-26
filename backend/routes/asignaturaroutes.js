const express = require("express");
const router = express.Router();
const asignaturacontrollers = require("../controllers/asignaturacontrollers");

router.get("/",asignaturacontrollers.consultar);
router.post("/",asignaturacontrollers.ingresar);

/* Ejemplo con parámetros
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/

module.exports = router;