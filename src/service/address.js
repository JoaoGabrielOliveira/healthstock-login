import Address from "../models/address.js";

export async function getAllAddress(req, res) {
    try {
        const allAddress = await Address.find()
        res.status(200).send(allAddress);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getAddress(req, res) {
    try {
        const address = await Address.findOneBy({id: req.params.id});
        res.status(200).send(address);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function saveAddress(req, res) {
    try {
        const addressRequest = req.body;
        let address = new Address();

        address.id = addressRequest.id;
        address.cep = addressRequest.cep;
        address.number = addressRequest.number;
        address.complement = addressRequest.complement;

        await address.save();
        res.status(200).send(address);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function deleteAddress(req, res, next) {
    try {
        const address = await Address.findOneBy({id: req.params.id});

        await address.remove();

        res.status(200).send(address);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function updateAddress(req, res, next) {
    try {
        const addressRequest = req.body;
        const address = await Address.findOneBy({id: userRequest.id});

        address.id = addressRequest.id;
        address.cep = addressRequest.cep;
        address.number = addressRequest.number;
        address.complement = addressRequest.complement;

        await address.save();
        res.status(200).send(address);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}