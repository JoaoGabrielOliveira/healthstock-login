import Supplier from '../models/supplier.js';
import { SendEvent } from '../config/index.js';
import Address from '../models/address.js';
import Contact from '../models/contact.js';

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
        SendEvent("Iniciando registro de Fornecedor", registrationSupplierBody);
        let saveSupplier = new Supplier(registrationSupplierBody);

        let contacts = saveSupplier.contacts;
        let addresses = saveSupplier.addresses;

        delete saveSupplier.contacts;
        delete saveSupplier.addresses;
        
        await saveSupplier.save();

        const contactsWithId = contacts.map(contact => new Contact({...contact, supplier: saveSupplier.id}))
        const addressesWithId = addresses.map(address => new Address({...address, supplier: saveSupplier.id}))

        contactsWithId.forEach( async contact =>  await contact.save() );
        addressesWithId.forEach( async address => await address.save() );

        SendEvent("Fornecedor é registrado com sucesso!", saveSupplier);
        res.status(201).send(saveSupplier);
    }catch (error) {
        SendEvent("Erro ao registrar Fornecedor!", [registrationSupplierBody, error], 'error');
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
        
        let contacts = supplier.contacts;
        let addresses = supplier.addresses;

        delete supplier.contacts;
        delete supplier.addresses;

        await supplier.save();

        const contactsWithId = contacts.map(contact => new Contact({...contact, supplier: saveSupplier.id}))
        const addressesWithId = addresses.map(address => new Address({...address, supplier: saveSupplier.id}))

        contactsWithId.forEach( async contact =>  await contact.save() );
        addressesWithId.forEach( async address => await address.save() );

        SendEvent("Supplier atualizado com sucesso!", registrationSupplierBody);
        res.status(201).send(supplier);
    }catch (error) {
        SendEvent("Erro ao atualizar Supplier!", [registrationSupplierBody, error], 'error');
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } finally {
        next();
    }
}