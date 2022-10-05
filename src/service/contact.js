import Contact from "../models/contact.js";

export async function getAllContact(req, res) {
    try {
        const allContacts = await Contact.find()
        res.status(200).send(allContacts);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getContact(req, res) {
    try {
        const contact = await Contact.findOneBy({id: req.params.id});
        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function saveContact(req, res) {
    try {
        const contactRequest = req.body;
        let contact = new Contact();

        contact.id = contactRequest.id;
        contact.responsibleArea = contactRequest.responsibleArea;
        contact.name = contactRequest.name;
        contact.details = contactRequest.details;

        await contact.save();
        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function deleteContact(req, res, next) {
    try {
        const contact = await Contact.findOneBy({id: req.params.id});

        await contact.remove();

        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function updateContact(req, res, next) {
    try {
        const contactRequest = req.body;
        const contact = await contact.findOneBy({id: userRequest.id});

        contact.id = contactRequest.id;
        contact.responsibleArea = contactRequest.responsibleArea;
        contact.name = contactRequest.name;
        contact.details = contactRequest.details;

        await contact.save();
        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}