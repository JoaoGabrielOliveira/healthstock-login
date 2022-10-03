import express from "express";
import Login from "./service/login.js"
import { PORT, DataSource } from "./Config.js";

import "reflect-metadata";

//Esse import é a mesma coisa de usar o require
//const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", Login);

try {
    DataSource.initialize();
    console.log("Banco de dados foi iniciado com sucesso!");

    //Codigo para salvar algum usuario no banco de dados
    //let user = new User("joao@gmail.com", "12345678")
    /*user.save()
        .then( () => console.info("Usuario foi criado com sucesso!"))
        .catch( (err) => console.error(err));*/
} catch (error) {
    console.error("Aconteceu um erro ao inciar banco de dados", err)
}

app.listen(PORT, () => {
    console.log("Iniciando HealthStock Login: ", `http://localhost:${PORT}`);
})