const express = require("express");
const router = express.Router();
const estudiantescontrollers = require("../controllers/estudiantescontrollers.js");

router.get("/",estudiantescontrollers.consultar);
router.post("/",estudiantescontrollers.ingresar);
/*
router.route("/:id")
.get(estudiantescontroller.consultarDetalle)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);
*/
module.exports = router;