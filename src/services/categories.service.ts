import { sanityClient } from '../constants/sanityConfig';
import { IAllFilters } from '../types/filter';

class CategoriesService {
  async getAllFilters() {
    try {
      const query = `
        {
          "Вікова категорія": *[_type == "ageGroup"] {
            _id,
            name 
          },
          "Тип": *[_type == "category"] {
            _id,
            name 
          },
          "Тип шкіри": *[_type == "skinType"] {
            _id,
            name 
          },
          "Призначення": *[_type == "purpose"] {
            _id,
            name 
          }
        }
      `;
      const filters = await sanityClient.fetch<IAllFilters>(query);
      const result = Object.entries(filters).map((obj) => ({ title: obj[0], options: obj[1] }));
      return result || null;
    } catch {
      return null;
    }
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
