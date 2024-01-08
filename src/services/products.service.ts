import { sanityClient } from '../constants/sanityConfig';
import { createProductModelMin } from '../modules/models';
import { createProductModel } from '../modules/models/ProductModel';
import { IProduct } from '../types/products';

// TODO: implement filtering
// interface IProductFilters {
//   category?: string;
//   minPrice?: number;
//   maxPrice?: number;
//   tags?: string[];
// }
class ProductService {
  private async fetchProducts(query: string) {
    try {
      return await sanityClient.fetch<IProduct[]>(query);
    } catch {
      return null;
    }
  }

  // TODO: filtering
  // async getFiltered(filters: IProductFilters) {
  async getFiltered() {
    const query = '*[_type == "product"]';
    const products = await this.fetchProducts(query);
    return products ? products.map((product) => createProductModelMin(product)) : products;
  }

  async getById(id: string) {
    const query = `*[_type == "product" && _id == "${id}"]`;
    const products = await this.fetchProducts(query);
    return products ? createProductModel(products[0]) : products;
  }

  async getByIdMin(id: string) {
    const query = `*[_type == "product" && _id == "${id}"]{ _id, name, price, image }`;
    const products = await this.fetchProducts(query);
    return products ? createProductModelMin(products[0]) : products;
  }
}

const productService = new ProductService();
export default productService;
