import express from "express";
import Login from "./service/login.js"
import { StartDatabase, enviroment as env } from "./config/index.js";

import "reflect-metadata";
import { getUser, getAllUser, deleteUser, saveUser, updateUser } from "./service/user.js";

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

StartDatabase();

app.listen(env.PORT, () => {
    console.log("Iniciando HealthStock Login: ", `http://localhost:${env.PORT}`);
})