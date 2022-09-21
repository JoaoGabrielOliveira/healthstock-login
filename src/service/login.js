import getUsuario from "../repository/user.js";

//Export default é para exportar a função em outros arquivos.
//Função para logar
export default function Login(req, res, next) {
    let loginBody = req.body;

    let email = loginBody.email;
    let senha = loginBody.senha;

    if(!email) {
        res.send("Você não mandou o email!");
        return;
    }

    if(!senha) {
        res.send("Você não mandou o senha!");
        return;
    }

    let usuario = getUsuario(email);

    if(!usuario){
        res.send("Usuario não existe");
        return;
    }
    
    res.send(usuario);
    next();
}

// Função para deslogar
export function Logout(req, res, next) {

}

