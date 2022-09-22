-- SQLite

--DROP TABLE users
CREATE TABLE users (
    --Toda tabela tem que ter um ID e esse ID é uma chave primaria (Primary Key)
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    --VARCHAR e TEXT é String
    -- NOT NULL é para não permitir que um usuario seja cadastrado sem o email ou a senha
    email VARCHAR(100) NOT NULL,
    password VARCHAR(32) NOT NULL
)

--supplier
--Quando você quer deletar algo, usa o DROP
--DROP TABLE supplier

--AUTOINCREMENT -> Sempre que criar um ID novo, ele vai dar um valor automaticamente

CREATE TABLE suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_user INT NOT NULL,
    cnpj INT(14) NOT NULL,
    cnae INT(7) NOT NULL,
    Company_name VARCHAR(100) NOT NULL
)

CREATE TABLE addresses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cep INT(8) NOT NULL,
    number INT(10) NOT NULL,
    complement VARCHAR(100)
)

CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    responsible_area VARCHAR(40) NOT NULL,
    name VARCHAR(100) NOT NULL,
    details VARCHAR(100) NOT NULL
)