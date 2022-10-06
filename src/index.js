import express from "express";
import "reflect-metadata";

import { StartDatabase, enviroment as env } from "./config/index.js";
import router from './routes.js';


//Esse import é a mesma coisa de usar o require
//const express = require("express");
const app = express();

app.use(express.json());
app.use('/', router);

StartDatabase();

app.listen(env.PORT, () => {
    console.log("Iniciando HealthStock Login: ", `http://localhost:${env.PORT}`);
})