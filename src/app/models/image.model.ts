import {Deserializable} from '../interfaces/deserializable.interface';

export class ImageModel implements Deserializable {
    id: string;
    directory: string;
    extension: string;
    fileName: string;
    size: string;
    url: string;

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}