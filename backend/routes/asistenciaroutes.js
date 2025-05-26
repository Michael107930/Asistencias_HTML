const express = require("express");
const router = express.Router();
const asistenciacontrollers = require("../controllers/asistenciacontrollers.js");

router.get("/",asistenciacontrollers.consultar);
router.post("/",asistenciacontrollers.ingresar);

/* Ejemplo con parámetros
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/

module.exports = router;