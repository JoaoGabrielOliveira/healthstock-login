import Address from "./address.js";
import Buyer from "./buyer.js";
import Contact from "./contact.js";
import User from "./user.js";

export async function getAllRegistrationBuyer(req, res) {
    let registrationBuyerBody = req.body;

    try{
        let getAllAddress = registrationBuyerBody.getAllAddress;
        let getAllBuyer = registrationBuyerBody.getAllBuyer;
        let getAllContact = registrationBuyerBody.getAllContact;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function getRegistrationBuyer(req, res) {
    let registrationBuyerBody = req.body;

    try{
        let getAddress = registrationBuyerBody.getAddress;
        let getBuyer = registrationBuyerBody.getBuyer;
        let getContact = registrationBuyerBody.getContact;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function saveRegistrationBuyer(req, res) {
    let registrationBuyerBody = req.body;

    try{
        let saveAddress = registrationBuyerBody.saveAddress;
        let saveBuyer = registrationBuyerBody.saveBuyer;
        let saveContact = registrationBuyerBody.saveContact;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function deleteRegistrationBuyer(req, res, next) {
    let registrationBuyerBody = req.body;
    
    try{
        let deleteAddress = registrationBuyerBody.deleteAddress;
        let deleteBuyer = registrationBuyerBody.deleteBuyer;
        let deleteContact = registrationBuyerBody.deleteContact;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function updateRegistrationBuyer(req, res, next) {
    let registrationBuyerBody = req.body;

    try{
        let updateAddress = registrationBuyerBody.updateAddress;
        let updateBuyer = registrationBuyerBody.updateBuyer;
        let updateContact = registrationBuyerBody.updateContact;
    }catch (error) {
        res.status(500).send({message: "Campo não preenchido", error: error.message});
     
}



// export default async function RegistrationBuyer(req, res, next) {

//     let registrationBuyerBody = req.body;

    //Cadastro para Compradores
    //     let cnpj = registrationBuyerBody.cnpj;
    //     let idUser = registrationBuyerBody.idUser;
    //     let id = registrationBuyerBody.id;

    //     let cep = registrationBuyerBody.cep;
    //     let number = registrationBuyerBody.number;
    //     let complement = registrationBuyerBody.complement;

    //     let responsibleArea = registrationBuyerBody.responsibleArea;
    //     let name = registrationBuyerBody.name;
    //     let details = registrationBuyerBody.details;

    //     try{
    //     if ((cnpj.value, id.value, idUser.value, cep.value, number.value, complement.value, responsibleArea.value, name.value, details.value) != "") {
    //         alert('Obrigado ' + id.value + ' os seus dados foram encaminhados com sucesso');
    //     }
    //     } catch (err) {
    //         res.status(500).send({message: "Campo não preenchido", error: err.message});
    // }
}