import { sanityClient } from '../constants/sanityConfig';
import { IProductFilters } from '../types/products';

class FiltersService {
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
      const idx = filters.findIndex((f) => f.title === 'category');
      if (idx !== -1) {
        const [typeFilter] = filters.splice(idx, 1);
        filters.unshift(typeFilter);
      }

      return filters || null;
    } catch {
      return null;
    }
  }

  getInitialFilters(searchParams: URLSearchParams): IProductFilters {
    return {
      category: searchParams.get('category')?.split(',') ?? [],
      skinType: searchParams.get('skinType')?.split(',') ?? [],
      ageGroup: searchParams.get('ageGroup')?.split(',') ?? [],
      purpose: searchParams.get('purpose')?.split(',') ?? []
    };
  }

  updateUrlFilters(newFilters: IProductFilters): URLSearchParams {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if ((newFilters[key as keyof IProductFilters]?.length ?? 0) > 0) {
        params.set(key, newFilters[key as keyof IProductFilters]!.join(','));
      }
    });
    return params;
  }
}

const filtersService = new FiltersService();

export default filtersService;
