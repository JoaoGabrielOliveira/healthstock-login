import { BaseEntity, EntitySchema } from "typeorm";


export default class Contact extends BaseEntity {
    id; responsibleArea; name; details; supplier; buyer;

    constructor(body){
        super();
        this.id = body?.id;
        this.responsibleArea = body?.responsibleArea;
        this.name = body?.name;
        this.details = body?.details;
        this.buyer = body?.buyer;
        this.supplier = body?.supplier;
    }
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
    },
    relations: {
        supplier: {
            type: 'many-to-one',
            target: 'Supplier',
            joinColumn: {
                name: 'supplierId'
            },
            nullable: true
        }, 
        buyer: {
            type: 'many-to-one',
            target: 'Buyer',
            joinColumn: {
                name: 'buyerId'
            },
            nullable: true
        }
    }
})