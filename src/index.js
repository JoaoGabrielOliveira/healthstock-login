import express from "express";
import "reflect-metadata";
import cors from 'cors';

import { StartDatabase, enviroment as env } from "./config/index.js";
import router from './routes.js';


//Esse import é a mesma coisa de usar o require
//const express = require("express");
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/', router);

StartDatabase();

app.listen(env.PORT, env.HOST, () => {
    console.log("Iniciando HealthStock Login: ", `http://${env.HOST}:${env.PORT}`);
})