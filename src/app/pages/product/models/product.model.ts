import { Deserializable } from "../../../interfaces/deserializable.interface";
import { TagModel, ImageModel } from "../../../models";
export class ProductModel implements Deserializable {
  constructor() {
    this.imageCollection = [];
    this.tags = [];
  }
  id: string;
  shopId: string;
  imageId: string;
  imageUrl: string;
  coverId: string;
  coverUrl: string;
  code: string;
  name: string;
  description: string;
  longDescription: string;
  categoryId: string;
  categoryName: string;
  price: number;
  cost: number;
  active: boolean;
  tags: TagModel[];
  imageCollection: ImageModel[];

  deseialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
