import { BaseEntity, EntitySchema } from "typeorm";


export default class User extends BaseEntity {
    id; email; password;

    constructor(email, password){
        super();
        this.email = email;
        this.password = password;
    }

}

export const Schema = new EntitySchema({
    name: "User",
    tableName: "users",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "integer",
            generated: true
        },
        email: {
            type: "varchar", nullable: false
        },
        password: {
            type: "varchar", nullable: false
        }
    }
})