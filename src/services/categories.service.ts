import { sanityClient } from '../constants/sanityConfig';
import { IProductFilters } from '../types/products';

class CategoriesService {
  async getAllFilters() {
    try {
      const query = `
        {
          "ageGroup": *[_type == "ageGroup"] {
            _id,
            name 
          },
          "category": *[_type == "category"] {
            _id,
            name 
          },
          "skinType": *[_type == "skinType"] {
            _id,
            name 
          },
          "purpose": *[_type == "purpose"] {
            _id,
            name 
          }
        }
      `;
      const data = await sanityClient.fetch<IProductFilters>(query);
      const filters = Object.entries(data).map((obj) => ({ title: obj[0], options: obj[1] }));
      const idx = filters.findIndex((f) => f.title === 'Тип');
      if (idx !== -1) {
        const [typeFilter] = filters.splice(idx, 1);
        filters.unshift(typeFilter);
      }

      return filters || null;
    } catch {
      return null;
    }
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
