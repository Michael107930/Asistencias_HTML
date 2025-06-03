const express = require("express");
const serverless = require("serverless-http");
const estudiantesRoutes = require("../../backend/routes/estudiantesroutes");

const app = express();
app.use(express.json());
app.use("/estudiantes", estudiantesRoutes);

exports.handler = serverless(app);

