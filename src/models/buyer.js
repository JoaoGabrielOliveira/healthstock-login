import { BaseEntity, EntitySchema } from "typeorm";


export default class Buyer extends BaseEntity {
    id; idUser; cnpj; companyName;
    //Campos que são chave estrangeira
    addressId; contactId;

    constructor(body){
        super();
        this.idUser = body?.idUser;
        this.cnpj = body?.cnpj;
        this.addressId = body?.addressId;
        this.contactId = body?.contactId;
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
        idUser: {
            type: "integer",
            unique: true,
            nullable: false
        },
        cnpj: {
            type: "varchar"
        }
    }
})