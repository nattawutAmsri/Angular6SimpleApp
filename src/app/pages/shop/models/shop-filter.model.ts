import { Deserializable } from '../../../interfaces/deserializable.interface';

export class ShopFilterModel implements Deserializable {
    name: string;
    code: string;
    currentPage: number;
    numPerPage: number;
    totalRow: number;

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}