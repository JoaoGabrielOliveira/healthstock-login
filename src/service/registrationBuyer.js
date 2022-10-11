import Address from '../models/address.js';
import Buyer from '../models/buyer.js';
import Contact from '../models/contact.js';
import { SendEvent } from '../config/index.js';

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
    try{
        SendEvent(`Iniciando Buyer ${req.params.id}!`, buyer);
        let buyer = await Buyer.findOneBy({id: req.params.id});
        
        if(!buyer){
            SendEvent(`Buyer ${req.params.id} não existe!`, buyer);
            res.status(400).send({ message: `Buyer ${req.params.id} não existe!`});
        }
        else {
            SendEvent(`Buyer ${req.params.id} foi retornando com sucesso!`, buyer);
            res.status(200).send(buyer);
        }
    }catch (error) {
        SendEvent("Erro ao registrar Buyer!", error, 'error');
        res.status(500).send({message: "Comprador não pode ser cadastrado no momento!", error: error.message});
    } 
}

export async function saveRegistrationBuyer(req, res) {
    let registrationBuyerBody = req.body;

    /*BODY PARA REQUISIÇÃO
    {
    "idUser": 1,
    "cnpj": "08570770",
    "cnae": "1234",
    "companyName": "Nome - Materias",
    "address":{
        "cep": "08570731",
        "number": 731,
        "complement": ""
    },
    "contact": {
        "responsibleArea":"Área de Vendas",
        "name": "Fernanda",
        "details": "11-999999999"
    }
}   */

    try{
        SendEvent("Iniciando registro de Buyer", registrationBuyerBody);
        let saveAddress = new Address(registrationBuyerBody.address);
        let saveContact = new Contact(registrationBuyerBody.contact);
        let saveBuyer = new Buyer(registrationBuyerBody);
        
        await saveAddress.save();
        await saveContact.save();

        saveBuyer.addressId = saveAddress.id;
        saveBuyer.contactId = saveContact.id;
        
        await saveBuyer.save();
        SendEvent("Buyer é registrado com sucesso!", saveBuyer);
        res.status(201).send(saveBuyer);
    }catch (error) {
        SendEvent("Erro ao registrar Buyer!", registrationBuyerBody, 'error');
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function updateRegistrationBuyer(req, res, next) {
    /**
     * @type { {id:Number, cnae:string, cnpj:string, companyName:string} }
     */
    const registrationBuyerBody = req.body;
    SendEvent("Iniciando atualização de Buyer", registrationBuyerBody);
    try{
        let buyer = new Buyer(registrationBuyerBody);
        await buyer.save();
        SendEvent("Buyer atualizado com sucesso!", registrationBuyerBody);
        res.status(201).send(buyer);
    }catch (error) {
        SendEvent("Erro ao atualizar Buyer!", registrationBuyerBody, 'error');
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } finally {
        next();
    }
}