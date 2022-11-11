import { BaseEntity, EntitySchema } from "typeorm";


export default class Address extends BaseEntity {
    id; cep; number; complement;

    constructor(body){
        super();
        this.id = body?.id;
        this.cep = body?.cep;
        this.number = body?.number;
        this.complement = body?.complement;
    }
}

export const Schema = new EntitySchema({
    name: "Address",
    tableName: "addresses",
    target: Address,
    columns: {
        id: {
            primary: true,
            type: "integer",
            generated: true
        },
        cep: {
            type: "varchar", nullable: false
        },
        number: {
            type: "integer"
        },
        complement: {
            type: "varchar"
        }
    },
    relations: {
        supplier: {
            type: 'many-to-one',
            target: 'Supplier',
            joinColumn: {
                name: 'supplierId'
            }
        },
    }
})