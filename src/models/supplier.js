import { BaseEntity, EntitySchema } from "typeorm";


export default class Supplier extends BaseEntity {
    id; user; cnpj; cnae; companyName;
    address; contact;

    constructor(body){
        super();
        this.user = body?.idUser;
        this.cnpj = body?.cnpj;
        this.cnae = body?.cnae;
        this.companyName = body?.companyName;
        this.address = body?.address;
        this.contact = body?.contact;
    }
}

export const Schema = new EntitySchema({
    name: "Supplier",
    tableName: "suppliers",
    target: Supplier,
    columns: {
        id: {
            primary: true,
            type: "integer",
            generated: true
        },
        cnpj: {
            type: "integer",
            nullable: false,
            unique: true
        },
        cnae: {
            type: "integer",
            nullable: false
        },
        companyName: {
            type: "varchar",
            nullable: false,
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