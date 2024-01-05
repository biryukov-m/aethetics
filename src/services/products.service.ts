import { sanityClient } from '../constants/sanityConfig';
import { createProductModelMin } from '../modules/models';
import { createProductModel } from '../modules/models/ProductModel';
import { IProduct } from '../types/products';

export interface IProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
}

export type ProductResponseFieldsFormat = 'minimal' | 'full';
class ProductService {
  // async getFiltered(filters: IProductFilters, responseType: ProductResponseFieldsFormat = 'full') {
  async getFiltered(responseType: ProductResponseFieldsFormat = 'full') {
    const fields = responseType === 'minimal' ? '_id, name, price, image' : '';
    const products = (await sanityClient.fetch(`*[_type == "product"]{${fields}}`)) as IProduct[];
    return products && products.length > 0
      ? products.map((product) => createProductModelMin(product))
      : null;
  }

  async getById(id: string) {
    const product = (await sanityClient.fetch(
      `*[_type == "product" && _id == "${id}"]`
    )) as IProduct[];
    return product.length > 0 ? createProductModel(product[0]) : null;
  }

  async getByIds(ids: string[]) {
    if (!ids || ids.length < 1) return null;

    const strIds = JSON.stringify(ids);

    const products = (await sanityClient.fetch(
      `*[_type == "product" && _id in ${strIds}]`
    )) as IProduct[];

    return products.length > 0 ? products.map((product) => createProductModelMin(product)) : null;
  }
}

const productService = new ProductService();
export default productService;
