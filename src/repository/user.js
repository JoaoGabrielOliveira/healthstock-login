import User from "../models/user.js";

var user = [
    {email: "joao@gmail.com", password:"12345678"}
]

export default async function getUser(paramEmail){
    //findBy
    return await User.findOneBy({email: paramEmail}) 
}