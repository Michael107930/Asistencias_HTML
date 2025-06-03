const express = require("express");
const router = express.Router();
const {
  guardarAsignatura,
  consultarAsignatura,
} = require("../controllers/asignaturacontrollers");

router.post("/", guardarAsignatura);
router.get("/", consultarAsignatura);

module.exports = router;