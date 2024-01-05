import { ProductModelMin } from './ProductModelMin';
import { IProduct } from '../../types/products';

export class ProductModel extends ProductModelMin {
  constructor(
    _id: string,
    name: string,
    price: number,
    image: { imageAlt: string; asset: { _ref: string } },
    public description: string,
    public composition: string
  ) {
    super(_id, name, price, image);
  }
}

export const createProductModel = (productFromServer: IProduct) =>
  new ProductModel(
    productFromServer._id,
    productFromServer.name,
    productFromServer.price,
    productFromServer.image,
    productFromServer.description,
    productFromServer.composition
  );
