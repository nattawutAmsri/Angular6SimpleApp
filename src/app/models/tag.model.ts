import {Deserializable} from '../interfaces/deserializable.interface';

export class TagModel implements Deserializable {
    id: string;
    name: string;
    code: string;
    coverId: string;
    coverUrl: string;
    decsription: string;

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}