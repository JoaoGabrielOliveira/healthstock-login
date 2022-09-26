import express from "express";
import axios from "axios";
import Login from "./service/login.js"

import "reflect-metadata";
import typeorm from 'typeorm';

//Esse import é a mesma coisa de usar o require
//const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json());

app.post("/login", Login);

var dataSource = new typeorm.DataSource({
    type:"sqlite",
    database: "database/database.sqlite",
    logger: true,
    entities: [
      "src/models/*.js"
    ],
    synchronize: true
}); 


dataSource.initialize()
    .then(() => {
        console.log("Banco de dados foi iniciado com sucesso!");

        //Codigo para salvar algum usuario no banco de dados
        //let user = new User("joao@gmail.com", "12345678")
        /*user.save()
            .then( () => console.info("Usuario foi criado com sucesso!"))
            .catch( (err) => console.error(err));*/
})
    .catch((err) => {
        console.error("Aconteceu um erro ao inciar banco de dados", err)
    });

app.listen(PORT, () => {
    console.log("Iniciando HealthStock Login");
})