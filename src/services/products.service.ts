import { sanityClient } from '../constants/sanityConfig';
import { IProduct } from '../types/products';

class ProductService {
  async getAll() {
    const products = (await sanityClient.fetch('*[_type == "product"]')) as IProduct[];
    return products;
  }

  async getById(id: string) {
    const product = (await sanityClient.fetch(
      `*[_type == "product" && _id == "${id}"]`
    )) as IProduct[];
    return product.length > 0 ? product[0] : null;
  }
}

const productService = new ProductService();
export default productService;
