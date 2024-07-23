import { sanityClient } from '../constants/sanityConfig';
import { createProductModelMin } from '../modules/models';
import { createProductModel } from '../modules/models/ProductModel';
import { IProduct, IProductFilters } from '../types/products';

// TODO: implement filterin

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
  async getFiltered(filters: IProductFilters = {}) {
    let query = '*[_type == "product"]';
    const conditions = [];

    if (filters.category) conditions.push(`category->name == "${filters.category}"`);
    if (filters.skinType) conditions.push(`"${filters.skinType}" in skinTypes[]->name`);
    if (filters.ageGroup) conditions.push(`"${filters.ageGroup}" in ageGroups[]->name`);
    if (filters.purpose) conditions.push(`"${filters.purpose}" in purposes[]->name`);

    if (conditions.length > 0) {
      query += `[${conditions.join(' && ')}]`;
    }

    // query += `{
    //   name,
    //   description,
    //   price,
    //   "category": category->name,
    //   "skinTypes": skinTypes[]->name,
    //   "ageGroups": ageGroups[]->name,
    //   "purposes": purposes[]->name,
    //   "ingredients": ingredients[]->name,
    //   mainImage
    // }`;

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
