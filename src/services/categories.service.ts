import { sanityClient } from '../constants/sanityConfig';
import { createCategoryModel } from '../modules/models/CategoryModel';
import { ICategory } from '../types/category';

class CategoriesService {
  async getCategories() {
    try {
      const query = '*[_type == "productCategory"]';
      const categories = await sanityClient.fetch<ICategory[]>(query);
      return categories ? categories.map((category) => createCategoryModel(category)) : categories;
    } catch {
      return null;
    }
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
