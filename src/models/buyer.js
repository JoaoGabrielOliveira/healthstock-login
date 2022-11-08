import { BaseEntity, EntitySchema } from "typeorm";


export default class Buyer extends BaseEntity {
    id; cnpj; companyName;
    //Campos que são chave estrangeira
    user; address; contact;

    constructor(body){
        super();
        this.user = body?.idUser;
        this.cnpj = body?.cnpj;
        this.address = body?.address;
        this.contact = body?.contact;
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
        address: {
            type: 'one-to-many',
            target: 'Address',
            joinColumn: {
                name: 'addressId'
            }
        },
        contact: {
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