import { Deserializable } from '../interfaces/deserializable.interface';

export class TokenModel implements Deserializable {
    clientId: string;
    token: string;
    refeshToken: string;
    expireIn: number;
    username: string;
    grantType: number;
    role: number;
    userMatrix: Object;

    constructor(clientId: string, token: string, refeshToken: string, expireIn: number,username: string,grantType: number,role: number,userMatrix: Object) {
        this.clientId = clientId;
        this.token = token;
        this.refeshToken = refeshToken;
        this.expireIn = expireIn;
        this.grantType = grantType;
        this.role = role;
        this.userMatrix = userMatrix;
    }

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
