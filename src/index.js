import express from "express";
import axios from "axios";
import Login, { Logout } from "./service/login.js"

import "reflect-metadata";
import typeorm from 'typeorm';

//Esse import é a mesma coisa de usar o require
//const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json());

app.post("/login", Login);

app.get("/login", (req, res) => {
    let loginResponse = axios.post("localhost:8000/login", {
        email: "joao@gmail.com", senha: "12345678"
    });
    loginResponse.then( (response) => {
        let user = response.data;

    }).catch((err) => console.error(err))

    res.send("Tudo numa boa")
});

app.get("/logout", Logout)

var dataSource = new typeorm.DataSource({
    type:"sqlite",
    database: "database/database.sqlite",
    logger: true,
    entities: [
      "models/*.js"
    ]
}); 


dataSource.initialize()
.then(() => {
    console.log("Banco de dados foi iniciado com sucesso!")
})
.catch((err) => {
    console.error("Aconteceu um erro ao inciar banco de dados", err)
});

app.listen(PORT, () => {
    console.log("Iniciando HealthStock Login");
})