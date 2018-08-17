import {ShopModel} from './shop.models';
import { Deserializable } from '../../../interfaces/deserializable.interface';

export class ShopResultModel implements Deserializable {
    items: ShopModel[];
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