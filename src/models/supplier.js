import { BaseEntity, EntitySchema } from "typeorm";


export default class Supplier extends BaseEntity {
    id; idUser; cnpj; cnae; companyName; addressId; contactId;

    constructor(body){
        super();
        this.idUser = body?.idUser;
        this.cnpj = body?.cnpj;
        this.cnae = body?.cnae;
        this.companyName = body?.companyName;
        this.addressId = body?.address.id;
        this.contactId = body?.contact.id;
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
        idUser: {
            type: "integer"
        },
        cnpj: {
            type: "integer"
        },
        cnae: {
            type: "integer"
        },
        companyName: {
            type: "varchar"
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
        }
    }
})