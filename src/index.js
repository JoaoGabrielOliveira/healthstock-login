import express from "express";
import Login from "./service/login.js";
import { PORT, DataSource, StartDatabase } from "./Config.js";

import "reflect-metadata";
import { getUser, getAllUser, deleteUser, saveUser, updateUser } from "./service/user.js";
import { getRegistrationBuyer, getAllRegistrationBuyer, deleteRegistrationBuyer, saveRegistrationBuyer, updateRegistrationBuyer } from "./service/registrationBuyer.js"
import { getRegistrationSupplier, getAllRegistrationSupplier, deleteRegistrationSupplier, saveRegistrationSupplier, updateRegistrationSupplier } from "./service/registrationSupplier.js"

//Esse import é a mesma coisa de usar o require
//const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", Login);

app.post("/users/", saveUser );
app.get("/users", getAllUser );
app.get("/users/:id", getUser );
app.put("/users", updateUser);
app.delete("/users/:id", deleteUser );

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

app.listen(PORT, () => {
    console.log("Iniciando HealthStock Login: ", `http://localhost:${PORT}`);
})