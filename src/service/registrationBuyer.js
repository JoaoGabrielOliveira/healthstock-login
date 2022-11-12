import Address from '../models/address.js';
import Buyer from '../models/buyer.js';
import Contact from '../models/contact.js';
import { SendEvent } from '../config/index.js';

export async function saveRegistrationBuyer(req, res) {
    /** BODY PARA REQUISIÇÃO
    @type {{
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
    }}}
}   */
    let registrationBuyerBody = req.body;

    try{
        SendEvent("Iniciando registro de Comprador", registrationBuyerBody);
        let saveBuyer = new Buyer(registrationBuyerBody);

        let contacts = saveBuyer.contacts;
        let addresses = saveBuyer.addresses;

        delete saveBuyer.contacts;
        delete saveBuyer.addresses;
        
        await saveBuyer.save();

        const contactsWithId = contacts.map(contact => new Contact({...contact, buyer: saveBuyer.id}))
        const addressesWithId = addresses.map(address => new Address({...address, buyer: saveBuyer.id}))

        contactsWithId.forEach( async contact =>  await contact.save() );
        addressesWithId.forEach( async address => await address.save() );

        SendEvent("Comprador é registrado com sucesso!", saveBuyer);
        res.status(201).send(saveBuyer);
    }catch (error) {
        SendEvent("Erro ao registrar Comprador!", [registrationBuyerBody, error], 'error');
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
        let saveBuyer = new Buyer(registrationBuyerBody);

        let contacts = saveBuyer.contacts;
        let addresses = saveBuyer.addresses;

        delete saveBuyer.contacts;
        delete saveBuyer.addresses;
        
        await saveBuyer.save();

        const contactsWithId = contacts.map(contact => new Contact({...contact, buyer: saveBuyer.id}))
        const addressesWithId = addresses.map(address => new Address({...address, buyer: saveBuyer.id}))

        contactsWithId.forEach( async contact =>  await contact.save() );
        addressesWithId.forEach( async address => await address.save() );

        SendEvent("Buyer atualizado com sucesso!", registrationBuyerBody);
        res.status(201).send(saveBuyer);
    }catch (error) {
        SendEvent("Erro ao atualizar Buyer!", [registrationBuyerBody, error], 'error');
        res.status(500).send({message: "Campo não preenchido", error: error.message});
    } finally {
        next();
    }
}