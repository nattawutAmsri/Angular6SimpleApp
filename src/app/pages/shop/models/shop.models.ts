import { Deserializable } from "../../../interfaces/deserializable.interface";
import { TagModel, ImageModel } from "../../../models";
export class ShopModel implements Deserializable {
  constructor() {
    this.imageCollection = [];
    this.tags = [];
  }
  id: string;
  imageId: string;
  imageUrl: string;
  coverId: string;
  coverUrl: string;
  code: string;
  name: string;
  owner: string;
  description: string;
  longDescription: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  province: string;
  country: string;
  zipcode: string;
  phone: string;
  email: string;
  line: string;
  facebook: string;
  twitter: string;
  instagram: string;
  googlePlus: string;
  website: string;
  lat: number;
  lng: number;
  locationName: string;
  active: boolean;
  tags: TagModel[];
  imageCollection: ImageModel[];

  deseialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
