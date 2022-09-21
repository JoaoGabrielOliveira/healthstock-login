
var usuarios = [
    {email: "joao@gmail.com", senha:"12345678"}
]

export default function getUsuario(email){
    return usuarios.find((value) => value.email == email);
}