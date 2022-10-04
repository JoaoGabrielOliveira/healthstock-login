import { BaseEntity, EntitySchema } from "typeorm";


export default class Contact extends BaseEntity {
    id; responsibleArea; name; details;
}

export const Schema = new EntitySchema({
    name: "Contact",
    tableName: "contacts",
    target: Contact,
    columns: {
        id: {
            primary: true,
            type: "integer",
            generated: true
        },
        responsibleArea: {
            type: "varchar", nullable: false
        },
        name: {
            type: "varchar", nullable: false
        },
        details: {
            type: "varchar", nullable: false
        }
    }
})