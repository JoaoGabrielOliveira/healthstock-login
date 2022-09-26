import getUser from "../repository/user.js";

//Export default é para exportar a função em outros arquivos.
//Função para logar
export default function Login(req, res, next) {
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

    let userPromise = getUser(email);

    userPromise.then((user) => {
        if(!user){
            res.status(401).send({error:"Email não encontrado!"});
            return;
        }
    
        if(user.password != password){
            res.status(401).send({error:"Senha está incorreta!"});
        }

        delete user.password;

        res.status(202).send(user);
    }).catch((err) => {
        
        res.status(500).send({message: "Aconteceu um erro inesperado", error: err})
        console.error(err);
    }).finally(() => {
        next();
    })
}