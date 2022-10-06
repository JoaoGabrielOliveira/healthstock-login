import User from "../models/user.js";

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

        res.status(202).send(user);
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