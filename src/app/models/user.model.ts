import { Deserializable } from "../interfaces/deserializable.interface";

export class User implements Deserializable {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    birthday: string;

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}