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
      const data = await sanityClient.fetch<IAllFilters>(query);
      const filters = Object.entries(data).map((obj) => ({ title: obj[0], options: obj[1] }));
      const idx = filters.findIndex((f) => f.title === 'Тип');
      if (idx !== -1) {
        const [typeFilter] = filters.splice(idx, 1); // Удаляем объект с тайтлом "Тип"
        filters.unshift(typeFilter); // Вставляем его на первое место
      }

      return filters || null;
    } catch {
      return null;
    }
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
