import { IProduct } from '../../types/products';

export class ProductModelMin {
  constructor(
    public _id: string,
    public name: string,
    public price: number,
    public image: { imageAlt: string; asset: { _ref: string } }
  ) {}
}

export const createProductModelMin = (productFromServer: IProduct) =>
  new ProductModelMin(
    productFromServer._id,
    productFromServer.name,
    productFromServer.price,
    productFromServer.image
  );
