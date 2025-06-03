const express = require("express");
const serverless = require("serverless-http");
const facultadRoutes = require("../../backend/routes/facultadroutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/.netlify/functions/facultad', facultadRoutes);

exports.handler = serverless(app);
 