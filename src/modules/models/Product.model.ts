import { IProduct } from '../../types/products';

export class ProductModel {
  constructor(
    public _id: string,
    public name: string,
    public price: number,
    public description: string,
    public composition: string,
    public image: { imageAlt: string; asset: { _ref: string } }
  ) {}
}

export const createProductModel = (productFromServer: IProduct) =>
  new ProductModel(
    productFromServer._id,
    productFromServer.name,
    productFromServer.price,
    productFromServer.description,
    productFromServer.composition,
    productFromServer.image
  );
