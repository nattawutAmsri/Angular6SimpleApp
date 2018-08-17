import { Deserializable } from '../../../interfaces/deserializable.interface';

export class ProductFilterModel implements Deserializable {
    constructor() {
        this.currentPage = 0;
        this.numPerPage = 30;
    }

    name: string;
    code: string;
    priceMin: number;
    priceMax: number;
    price: number;
    currentPage: number;
    numPerPage: number;
    totalRow: number;
    shopId: string;

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}