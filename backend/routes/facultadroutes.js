const express = require("express");
const router = express.Router();
const {
  actualizarFacultad,
  consultarFacultad,
} = require("../controllers/facultadcontrollers");

router.get("/", consultarFacultad);
router.post("/", actualizarFacultad);

module.exports = router;