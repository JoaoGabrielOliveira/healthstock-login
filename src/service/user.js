import User from "../models/user.js";
import bcrypt from 'bcrypt';
import {enviroment, SendEvent} from '../config/index.js';

export async function getAllUser(req, res) {
    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getUser(req, res) {
    try {
        const user = await User.findOneBy({id: req.params.id});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function saveUser(req, res) {
    try {
        const userRequest = req.body;
        let user = new User();
        
        const salt = await bcrypt.genSalt(enviroment.SALT_ROUNDS);
        user.password = await bcrypt.hash(userRequest.password, salt);
        user.email = userRequest.email;

        user = await user.save();
        if(user){
            delete user.password;
            res.status(201).send(user)
        }
        
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function deleteUser(req, res, next) {
    try {
        const user = await User.findOneBy({id: req.params.id});

        await user.remove();

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function updateUser(req, res, next) {
    try {
        const userRequest = req.body;
        const user = await User.findOneBy({id: userRequest.id});

        user.email = userRequest.email;
        user.password = userRequest.password;

        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function sendEmail(req, res, next) {
    try {
        const {userId, motivation, userType, linkToRedirect } = req.body;

        if(userType != 'supplier' && userType != 'buyer'){
            res.status(401).send({message: "Tipo de usuário está invalido!", error: userType});
            return;
        }
        const user = await User.findOneBy({id: userId});

        const mailOptions = {
            from: '"HealthStock" <' + enviroment.EMAIL_ADDRESS + '>',
            to: user.email,
            subject: 'HealthStock - Pre cadastramento feito com sucesso!',
            html: getEmailText(linkToRedirect + "/" + userId)
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                SendEvent("Erro ao enviar email!", error, 'error');
                console.log(error);
                res.status(500).send({message: "Ocorreu um erro ao enviar o e-mail", error: error.message});
                return;
            }
        });

        SendEvent("Email foi enviado com sucesso!");
        res.status(200).send({message: "E-mail enviado com sucesso!"});
    } catch (error) {
        SendEvent("Erro ao enviar email!", error, 'error');
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    } finally {
        next();
    }
}

function getEmailText(link){
    const title = "<h1>Olá, estamos muito felizes por sua solicitação!</h1>";
    const paragraphs = [
        "<p>Nós da HealthStock analisamos sua solicitação de cadastro e <b>aprovamos</b> seu cadastramento.</p>",
        "<p>Para dar continuidade ao processo, pedimos que click no botão a baixo para dar continuidade ao processo!</p>"
    ];

    const tagLink = `<a href="${link}">${link}</a>`;

    return `
${title}
${paragraphs.join('')}
${tagLink}
`;
}