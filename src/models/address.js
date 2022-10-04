import { BaseEntity, EntitySchema } from "typeorm";


export default class Address extends BaseEntity {
    id; cep; number; complement
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
            type: "integer"
        },
        number: {
            type: "integer"
        },
        complement: {
            type: "varchar"
        }
    }
})