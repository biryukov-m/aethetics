import { sanityClient } from '../constants/sanityConfig';
import { createProductModelMin } from '../modules/models';
import { createProductModel } from '../modules/models/ProductModel';
import { IProduct, IProductFilters } from '../types/products';

class ProductService {
  private async fetchProducts(query: string) {
    try {
      return await sanityClient.fetch<IProduct[]>(query);
    } catch {
      return null;
    }
  }

  async getFiltered(filters: IProductFilters) {
    const conditions: string[] = [];

    if (filters.category && filters.category.length > 0) {
      conditions.push(`category->name in ${JSON.stringify(filters.category)}`);
    }
    if (filters.skinType && filters.skinType.length > 0) {
      filters.skinType.forEach((i) => conditions.push(`("${i}" in skinTypes[]->name)`));
    }
    if (filters.ageGroup && filters.ageGroup.length > 0) {
      filters.ageGroup.forEach((i) => conditions.push(`("${i}" in ageGroups[]->name)`));
    }
    if (filters.purpose && filters.purpose.length > 0) {
      filters.purpose.forEach((i) => conditions.push(`("${i}" in purposes[]->name)`));
    }

    const query = `*[_type == "product" ${
      conditions.length > 0 ? `&& ${conditions.join(' && ')}` : ''
    }]`;

    const products = await this.fetchProducts(query);
    console.log('Constructed Query:', query); // For debugging
    console.log('Filtered Products:', products); // For debugging
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
