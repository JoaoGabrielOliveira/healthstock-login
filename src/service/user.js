import User from "../models/user.js";
import bcrypt from 'bcrypt';
import {enviroment} from '../config/index.js';

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