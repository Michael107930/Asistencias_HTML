const express = require("express");
const router = express.Router();
const facultadcontrollers = require("../controllers/facultadcontrollers");

router.get("/",facultadcontrollers.consultar);
router.post("/",facultadcontrollers.ingresar);

/* Ejemplo con parámetros
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/

module.exports = router;