import express from "express";
import Login from "./service/login.js";
import { PORT, DataSource, StartDatabase } from "./Config.js";

import "reflect-metadata";
import { getUser, getAllUser, deleteUser, saveUser, updateUser } from "./service/user.js";
import { getRegistrationBuyer, getAllRegistrationBuyer, deleteRegistrationBuyer, saveRegistrationBuyer, updateRegistrationBuyer } from "./service/registrationBuyer.js";
import { getRegistrationSupplier, getAllRegistrationSupplier, deleteRegistrationSupplier, saveRegistrationSupplier, updateRegistrationSupplier } from "./service/registrationSupplier.js";

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
app.get('/', (req,res) => res.status(200).send({"message":"The service is working"}));
app.use('/', router);

app.post("/cadastro/comprador", saveRegistrationBuyer);
app.get("/cadastro/comprador", getAllRegistrationBuyer);
app.get("/cadastro/:id/comprador", getRegistrationBuyer);
app.put("/cadastro/comprador", updateRegistrationBuyer);
app.delete("/cadastro/:id/comprador", deleteRegistrationBuyer);

app.post("/cadastro/fornecedor", saveRegistrationSupplier);
app.get("/cadastro/fornecedor", getAllRegistrationSupplier);
app.get("/cadastro/:id/fornecedor", getRegistrationSupplier);
app.put("/cadastro/fornecedor", updateRegistrationSupplier);
app.delete("/cadastro/:id/fornecedor", deleteRegistrationSupplier);

StartDatabase();

app.listen(env.PORT, env.HOST, () => {
    console.log("Iniciando HealthStock Login: ", `http://${env.HOST}:${env.PORT}`);
})