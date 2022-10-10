import Address from "./address.js";
import Contact from "./contact.js";
import Supplier from "./supplier.js";
import User from "./user.js";

export async function getAllRegistrationSupplier(req, res) {
    let registrationSupplierBody = req.body;

    try{
        let getAllAddress = registrationSupplierBody.getAllAddress;
        let getAllContact = registrationSupplierBody.getAllContact;
        let getAllSupplier = registrationSupplierBody.getAllSupplier;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function getRegistrationSupplier(req, res) {
    let registrationSupplierBody = req.body;

    try{
        let getAddress = registrationSupplierBody.getAddress;
        let getContact = registrationSupplierBody.getContact;
        let getSupplier = registrationSupplierBody.getSupplier;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function saveRegistrationSupplier(req, res) {
    let registrationSupplierBody = req.body;

    try{
        let saveAddress = registrationSupplierBody.saveAddress;
        let saveContact = registrationSupplierBody.saveContact;
        let saveSupplier = registrationSupplierBody.saveSupplier;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function deleteRegistrationSupplier(req, res, next) {
    let registrationSupplierBody = req.body;
    
    try{
        let deleteAddress = registrationSupplierBody.deleteAddress;
        let deleteContact = registrationSupplierBody.deleteContact;
        let deleteSupplier = registrationSupplierBody.deleteSupplier;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function updateRegistrationSupplier(req, res, next) {
    let registrationSupplierBody = req.body;

    try{
        let updateAddress = registrationSupplierBody.updateAddress;
        let updateContact = registrationSupplierBody.updateContact;
        let updateSupplier = registrationSupplierBody.updateSupplier;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
     
}
}