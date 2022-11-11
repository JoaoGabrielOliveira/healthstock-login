import User from "../models/user.js";
import Supplier from '../models/supplier.js';
import Buyer from '../models/buyer.js';

//Export default é para exportar a função em outros arquivos.
//Função para logar
export default async function Login(req, res, next) {
    let loginBody = req.body;

    let email = loginBody.email;
    let password = loginBody.password;

    if(!email) {
        res.status(401).send({error:"Email não foi enviado na requisição!"});
        return;
    }

    if(!password) {
        res.status(401).send({error:"Senha não foi enviado na requisição!"});
        return;
    }
    let user;
    try {
        user = await User.findOneBy({email: email});
        

        if(!user){
            res.status(401).send({error:"Email não encontrado!"});
            return;
        }

        let checkPass = await checkPassword(password, user.password);

        if(!checkPass){
            res.status(401).send({error:"Senha está incorreta!"});
            return;
        }

        delete user.password;

        let userType = await checkTypeOfUser(user.id);

        if(!userType){
            res.status(401).send({error: "Usuario não está com dados completos.Usuários não tem dados informando se é Comprador ou Fornecedor"});
            return;
        }

        userType.userType.user = user;


        res.status(202).send(userType);
    } catch (err) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: err.message});
    }
    finally{
        next();
    }
}

async function checkPassword(plainPassword, hashPassword){
    //return bcrypt.compare(plainPassword, hashPassword);

    return plainPassword == hashPassword;
}

async function checkTypeOfUser(userId){
    let userType = await Supplier.findOne({where: {user: {id: userId}}, relations: {addresses: true, contacts: true}});

    if(userType){
        return {type: "supplier", userType};
    }

    userType = await Buyer.findOneBy({ user: {id: userId}});

    if(userType){
        return {type: "buyer", userType};
    }

    return undefined;
}