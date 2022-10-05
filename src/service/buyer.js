import Buyer from "../models/buyer.js";

export async function getAllBuyer(req, res) {
    try {
        const allBuyers = await Buyer.find()
        res.status(200).send(allBuyers);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getBuyer(req, res) {
    try {
        const buyer = await Buyer.findOneBy({id: req.params.id});
        res.status(200).send(buyer);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function saveBuyer(req, res) {
    try {
        const buyerRequest = req.body;
        let buyer = new Buyer();

        buyer.id = buyerRequest.id;
        buyer.idUser = buyerRequest.idUser;
        buyer.cnpj = buyerRequest.cnpj;
        buyer.deliveryAddressId = buyerRequest.deliveryAddressId;

        await buyer.save();
        res.status(200).send(buyer);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function deleteBuyer(req, res, next) {
    try {
        const buyer = await Buyer.findOneBy({id: req.params.id});

        await buyer.remove();

        res.status(200).send(buyer);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function updateBuyer(req, res, next) {
    try {
        const buyerRequest = req.body;
        const buyer = await Buyer.findOneBy({id: userRequest.id});

        buyer.id = buyerRequest.id;
        buyer.idUser = buyerRequest.idUser;
        buyer.cnpj = buyerRequest.cnpj;
        buyer.deliveryAddressId = buyerRequest.deliveryAddressId;

        await buyer.save();
        res.status(200).send(buyer);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}