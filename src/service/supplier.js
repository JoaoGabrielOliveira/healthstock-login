import Supplier from "../models/supplier.js";

export async function getAllSupplier(req, res) {
    try {
        const allSuppliers = await Supplier.find()
        res.status(200).send(allSuppliers);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getSupplier(req, res) {
    try {
        const supplier = await Supplier.findOneBy({id: req.params.id});
        res.status(200).send(supplier);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function saveSupplier(req, res) {
    try {
        const supplierRequest = req.body;
        let supplier = new Supplier();

        supplier.id = supplierRequest.id;
        supplier.idUser = supplierRequest.idUser;
        supplier.cnpj = supplierRequest.cnpj;
        supplier.cnae = supplierRequest.cnae;
        supplier.companyName = supplierRequest.companyName;

        await supplier.save();
        res.status(200).send(supplier);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function deleteSupplier(req, res, next) {
    try {
        const supplier = await Supplier.findOneBy({id: req.params.id});

        await supplier.remove();

        res.status(200).send(supplier);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}

export async function updateSupplier(req, res, next) {
    try {
        const supplierRequest = req.body;
        const supplier = await Supplier.findOneBy({id: userRequest.id});

        supplier.id = supplierRequest.id;
        supplier.idUser = supplierRequest.idUser;
        supplier.cnpj = supplierRequest.cnpj;
        supplier.cnae = supplierRequest.cnae;
        supplier.companyName = supplierRequest.companyName;

        await supplier.save();
        res.status(200).send(supplier);
    } catch (error) {
        res.status(500).send({message: "Aconteceu um erro inesperado", error: error.message});
    }
}