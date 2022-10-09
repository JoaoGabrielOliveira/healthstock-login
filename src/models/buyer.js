import { BaseEntity, EntitySchema } from "typeorm";


export default class Buyer extends BaseEntity {
    id; idUser; cnpj; deliveryAddressId;

    constructor(idUser, cnpj, deliveryAddressId){
        super();
        this.idUser = idUser;
        this.cnpj = cnpj;
        this.deliveryAddressId = deliveryAddressId;
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
            type: "integer"
        },
        cnpj: {
            type: "integer"
        },
        deliveryAddressId: {
            type: "varchar"
        }
    }
})