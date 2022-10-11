import { BaseEntity, EntitySchema } from "typeorm";


export default class Supplier extends BaseEntity {
    id; idUser; cnpj; cnae; companyName; addressId; contactId;

    constructor(idUser, cnpj, cnae,companyName){
        super();
        this.idUser = idUser;
        this.cnpj = cnpj;
        this.cnae = cnae;
        this.companyName = companyName;
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
    }
})