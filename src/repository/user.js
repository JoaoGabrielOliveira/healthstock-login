
var user = [
    {email: "joao@gmail.com", password:"12345678"}
]

export default function getUser(email){
    return user.find((value) => value.email == email);
}