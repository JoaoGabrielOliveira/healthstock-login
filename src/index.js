import express from "express";
import Login from "./service/login.js"
import { PORT, DataSource, StartDatabase } from "./Config.js";

import "reflect-metadata";
import { getUser, getAllUser, deleteUser, saveUser, updateUser } from "./service/user.js";

//Esse import é a mesma coisa de usar o require
//const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", Login);

StartDatabase();

app.listen(PORT, () => {
    console.log("Iniciando HealthStock Login: ", `http://localhost:${PORT}`);
})