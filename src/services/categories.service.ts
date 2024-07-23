import { sanityClient } from '../constants/sanityConfig';
import { IAllFilters } from '../types/filter';

class CategoriesService {
  async getAllFilters() {
    try {
      const query = `
        {
          "ageGroups": *[_type == "ageGroup"] {
            _id,
            name
          },
          "categories": *[_type == "category"] {
            _id,
            name
          },
          "skinTypes": *[_type == "skinType"] {
            _id,
            name
          },
          "purposes": *[_type == "purpose"] {
            _id,
            name
          }
        }
      `;
      const filters = await sanityClient.fetch<IAllFilters>(query);
      return filters || null;
    } catch {
      return null;
    }
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
