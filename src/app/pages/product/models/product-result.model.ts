import {ProductModel} from './product.model';
import { Deserializable } from '../../../interfaces/deserializable.interface';

export class ProductResultModel implements Deserializable {
    items: ProductModel[];
    currentPage: number;
    numPerPage: number;
    totalRow: number;

    constructor() {
        this.currentPage = 0;
        this.numPerPage = 10;
        this.totalRow = 0;
    }

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}