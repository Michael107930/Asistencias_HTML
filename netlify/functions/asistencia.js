const express = require("express");
const serverless = require("serverless-http");
const asistenciaRoutes = require("../../backend/routes/asistenciaroutes");

const app = express();
app.use(express.json());
app.use("/asistencia", asistenciaRoutes);

exports.handler = serverless(app);