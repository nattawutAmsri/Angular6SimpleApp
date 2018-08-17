import { Deserializable } from "../interfaces/deserializable.interface";

export class TokenModel implements Deserializable {
    clientId: string;
    expireIn: number;
    grantType: number;
    message: string;
    refeshToken: string;
    role: number;
    status: number;
    username: string;
    // userMatrix: []

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}