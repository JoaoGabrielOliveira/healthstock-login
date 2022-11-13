import User from "../models/user.js";
import Supplier from '../models/supplier.js';
import Buyer from '../models/buyer.js';
import Contact from '../models/contact.js';
import Address from '../models/Address.js';

import { IsNull } from 'typeorm';
import bcrypt from 'bcrypt';

import { SendEvent } from '../config/index.js';

//Export default é para exportar a função em outros arquivos.
//Função para logar
export default async function Login(req, res, next) {
    let loginBody = req.body;

    let email = loginBody.email;
    let password = loginBody.password;

    if(!email) {
        const message = "Email não foi enviado na requisição!";
        SendEvent(message, email, 'warn');
        res.status(401).send({message:message});
        return;
    }

    if(!password) {
        const message = "Senha não foi enviado na requisição!";
        SendEvent(message, email, 'warn');
        res.status(401).send({message:message});
        return;
    }
    let user;
    try {
        user = await User.findOneBy({email: email});
        

        if(!user){
            const message = "Email não encontrado!";
            SendEvent(message, user, 'warn');
            res.status(401).send({message:message});
            return;
        }

        let checkPass = await checkPassword(password, user.password);

        if(!checkPass){
            const message = "Senha está incorreta!";
            SendEvent(message, user, 'warn');
            res.status(401).send({message:message});
            return;
        }

        delete user.password;

        let userType = await checkTypeOfUser(user.id);

        if(!userType){
            const message = "Usuario não está com dados completos.Usuários não tem dados informando se é Comprador ou Fornecedor";
            SendEvent(message, user, 'warn');
            res.status(401).send({message:message});
            return;
        }

        userType.userType.user = user;

        SendEvent('Login realizado com sucesso!', userType);
        res.status(202).send(userType);
    } catch (err) {
        SendEvent('Aconteceu um erro inesperado!', [user, err], 'error');
        res.status(500).send({message: "Aconteceu um erro inesperado", error: err.message});
    }
    finally{
        next();
    }
}

async function checkPassword(plainPassword, hashPassword){
    return bcrypt.compare(plainPassword, hashPassword);

    return plainPassword == hashPassword;
}

async function checkTypeOfUser(userId){
    const where = {user: {id: userId}};

    let userType = await Supplier.findOne({where: where});

    if(userType){
        userType.contacts = await Contact.findBy({supplier: {id: userType.id}, buyer: IsNull()});
        
        //userType.addresses = await Address.findBy({supplier: {id: userType.id}, buyer: IsNull()});

        return {type: "supplier", userType};
    }

    userType = await Buyer.findOne({where: where});

    if(userType){
        userType.contacts = await Contact.findBy({buyer: {id: userType.id}, supplier: IsNull()});
        //userType.addresses = await Address.findBy({buyer: {id: userType.id}, supplier: IsNull()});

        return {type: "buyer", userType};
    }

    return undefined;
}