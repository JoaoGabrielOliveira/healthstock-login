import Address from '../models/address.js';
import Contact from '../models/contact.js';
import Supplier from '../models/supplier.js';
import { SendEvent } from '../config/index.js';

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
    try{
        SendEvent(`Iniciando Supplier ${req.params.id}!`, supplier);
        let supplier = await Supplier.findOneBy({id: req.params.id});

        if(!supplier){
            SendEvent(`Supplier ${req.params.id} não existe!`, supplier);
            res.status(400).send({ message: `Supplier ${req.params.id} não existe!`});
        }
        else {
            SendEvent(`Supplier ${req.params.id} foi retornando com sucesso!`, supplier);
            res.status(200).send(supplier);
        }
    }catch (error) {
        SendEvent("Erro ao registrar Supplier!", registrationSupplierBody, 'error');
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } 
}

export async function saveRegistrationSupplier(req, res) {
    let registrationSupplierBody = req.body;

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
        SendEvent("Iniciando registro de Supplier", registrationSupplierBody);
        let saveAddress = new Address(registrationSupplierBody.address);
        let saveContact = new Contact(registrationSupplierBody.contact);
        let saveSupplier = new Supplier(registrationSupplierBody);
        
        await saveAddress.save();
        await saveContact.save();

        saveSupplier.addressId = saveAddress.id;
        saveSupplier.contactId = saveContact.id;
        
        await saveSupplier.save();
        SendEvent("Supplier é registrado com sucesso!", saveSupplier);
        res.status(201).send(saveSupplier);
    }catch (error) {
        SendEvent("Erro ao registrar Supplier!", registrationSupplierBody, 'error');
        res.status(500).send({message: "Fornecedor não pode ser cadastrado!", error: error.message});
    } 
}

export async function updateRegistrationSupplier(req, res, next) {
    /**
     * @type { {id:Number, cnae:string, cnpj:string, companyName:string} }
     */
    const registrationSupplierBody = req.body;
    SendEvent("Iniciando atualização de Supplier", registrationSupplierBody);
    try{
        let supplier = new Supplier(registrationSupplierBody);
        await supplier.save();
        SendEvent("Supplier atualizado com sucesso!", registrationSupplierBody);
        res.status(201).send(supplier);
    }catch (error) {
        SendEvent("Erro ao atualizar Supplier!", registrationSupplierBody, 'error');
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } finally {
        next();
    }
}