import { BaseEntity, EntitySchema } from "typeorm";


export default class Buyer extends BaseEntity {
    id; cnpj; companyName;
    //Campos que são chave estrangeira
    user; addresses; contacts;

    constructor(body){
        super();
        this.user = body?.idUser;
        this.cnpj = body?.cnpj;
        this.addresses = body?.addresses;
        this.contacts = body?.contacts;
        this.companyName = body?.companyName;
    }
}

export const Schema = new EntitySchema({
    name: "Buyer",
    tableName: "buyers",
    target: Buyer,
    columns: {
        id: {
            primary: true,
            type: "integer",
            generated: true
        },
        cnpj: {
            type: "varchar",
            nullable: false,
            unique: true
        },
        companyName: {
            type: "varchar",
            nullable: false
        }
    },
    relations: {
        addresses: {
            type: 'one-to-many',
            target: 'Address',
            joinColumn: {
                name: 'addressId'
            }
        },
        contacts: {
            type: 'one-to-many',
            target: 'Contact',
            joinColumn: {
                name: 'contactId'
            }
        },
        user: {
            type: 'one-to-one',
            target: 'User',
            joinColumn: {
                name: 'userId'
            }
        },
    }
})