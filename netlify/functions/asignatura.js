const express = require("express");
const serverless = require("serverless-http");
const asignaturaRoutes = require("../../backend/routes/asignaturaroutes");

const app = express();
app.use(express.json());
app.use("/asignatura", asignaturaRoutes);

exports.handler = serverless(app);

