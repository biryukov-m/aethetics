import { PRODUCTS } from '../data/products';
import { IProduct } from '../types/products';

class ProductService {
  products: IProduct[];

  constructor() {
    this.products = PRODUCTS;
  }

  getAll() {
    return this.products;
  }

  getById(id: string) {
    const products = this.getAll();
    const foundProduct = products.find((product) => product.id === Number(id));
    return foundProduct;
  }
}

const productService = new ProductService();
export default productService;
